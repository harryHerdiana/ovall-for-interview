import datoCMSAPI from '@modules/datocms/api/client'
import shopifyStoreFrontAPI from '@modules/shopify/api/storefront/client'
import InstagramAPI from '@modules/instagram/api'
import { GET_PRODUCT } from '@modules/shopify/api/storefront/queries'
import parseProductResponse from '@modules/shopify/api/storefront/parser'
import { IShopifyProduct } from '@modules/shopify/types'
import {
  APP_QUERY,
  PRODUCT_PAGE_QUERY,
  HOMEPAGE_QUERY,
  ABOUT_US_QUERY,
  FAQ_QUERY,
  RATINGS_QUERY,
  STATIC_PAGE_QUERY
} from '@modules/datocms/api/queries'
import {
  Context,
  IAboutUsPage,
  IAppContent,
  IDefaultProps,
  IFAQPage,
  IHomePage,
  IProductPage,
  IStaticPage
} from './types'
import { mapLocaleString } from './utils'
import mapProductPageData from './mapper/productPage'
import mapHomepageData from './mapper/homepage'
import mapAppContent from './mapper/app'
import mapAboutUsData from './mapper/aboutUs'
import mapFAQData from './mapper/faq'
import mapRatingData from './mapper/ratings'
import mapStaticPage from './mapper/staticPage'

export default class PageDataService {
  context: Context

  shopifyClient: any // TODO: add shopify buy-sdk types

  constructor(context: Context) {
    this.context = context
    this.shopifyClient = shopifyStoreFrontAPI
  }

  private async requestDatoCMS(query, variables = {}) {
    return datoCMSAPI({
      query,
      variables: {
        locale: mapLocaleString(this.context.locale),
        ...variables
      }
    })
  }

  private async getProductData(): Promise<IShopifyProduct> {
    try {
      const response = await this.shopifyClient.query({
        data: {
          query: GET_PRODUCT,
          variables: { handle: 'ovall™-2' }
        }
      })

      if (!response) {
        throw new Error('Shopify Client: no product found')
      }

      return parseProductResponse(response)
    } catch (e) {
      console.log('error call shopify api', e.message)
      console.log('error call shopify api II', e.stack)
      throw e
    }
  }

  private async getAppContent(): Promise<IAppContent> {
    const response = await this.requestDatoCMS(APP_QUERY)
    return mapAppContent(response)
  }

  private async getMenus(): Promise<any> {
    return this.getAppContent()
  }

  /**
   * @param query graphql query string
   * @param entryKey model name in datocms
   * @returns IPageProps
   */
  private async requestDatoCMSWithBaseData(query, datoCMSModelKey, mappingFn?, variables?) {
    const [appProps, product] = await Promise.all([this.getMenus(), this.getProductData()])

    let instagramImages = []

    if (datoCMSModelKey === 'homepage') {
      instagramImages = await InstagramAPI.getImages()
    }

    const datoCMSResponse = await this.requestDatoCMS(query, variables)
    const content = datoCMSResponse[datoCMSModelKey]
    const mappedContent = mappingFn ? mappingFn(content) : content

    if (!content.seoTags) {
      console.warn('Page Data does not contain SeoTags')
    }
    return {
      appProps: {
        ...appProps,
        socialFeedSection: {
          ...appProps.socialFeedSection,
          images: instagramImages
        }
      },
      seoTags: content.seoTags,
      product,
      ...mappedContent
    }
  }

  public async homepage(): Promise<IHomePage> {
    return this.requestDatoCMSWithBaseData(HOMEPAGE_QUERY, 'homepage', mapHomepageData)
  }

  public async product(): Promise<IProductPage> {
    return this.requestDatoCMSWithBaseData(PRODUCT_PAGE_QUERY, 'product', mapProductPageData)
  }

  public async aboutUs(): Promise<IAboutUsPage & IDefaultProps> {
    return this.requestDatoCMSWithBaseData(ABOUT_US_QUERY, 'aboutUsPage', mapAboutUsData)
  }

  public async faqPage(): Promise<IFAQPage> {
    return this.requestDatoCMSWithBaseData(FAQ_QUERY, 'faqPage', mapFAQData)
  }

  public async ratings(): Promise<IFAQPage> {
    return this.requestDatoCMSWithBaseData(RATINGS_QUERY, 'ratingPage', mapRatingData)
  }

  public async staticPage(title: string): Promise<IStaticPage & IDefaultProps> {
    return this.requestDatoCMSWithBaseData(STATIC_PAGE_QUERY, 'staticPage', mapStaticPage, {
      title
    })
  }
}
