import datoCMSAPI from '@modules/datocms/api/client'
import shopifyStoreFrontAPI from '@modules/shopify/api/storefront/client'
import { GET_PRODUCT } from '@modules/shopify/api/storefront/queries'
import parseProductResponse from '@modules/shopify/api/storefront/parser'
import { IShopifyProduct } from '@modules/shopify/types'
import { FOOTER_QUERY, PRODUCT_PAGE_QUERY, HOMEPAGE_QUERY } from '@modules/datocms/api/queries'
import { ABOUT_US_QUERY } from '@modules/datocms/api/queries/aboutUs'
import { Context, IAboutUsPage, IAppContent, IHomePage, IProductPage } from './types'
import { mapLocaleString } from './utils'
import mapProductPageData from './mapper/productPage'
import mapHomepageData from './mapper/homepage'
import mapAppContent from './mapper/app'
import mapAboutUsData from './mapper/aboutUs'

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
    const response = await this.requestDatoCMS(FOOTER_QUERY)
    return mapAppContent(response)
  }

  private async getMenus(): Promise<any> {
    const { footer, cookieNotice } = await this.getAppContent()
    const menu = [
      {
        id: '1',
        label: 'Product',
        path: '/products/ovall'
      },
      {
        id: '2',
        label: 'Über uns',
        path: '/ueber-uns'
      }
    ]

    return {
      menu,
      cookieNotice,
      footer
    }
  }

  /**
   * @param query graphql query string
   * @param entryKey model name in datocms
   * @returns IPageProps
   */
  private async requestDatoCMSWithBaseData(query, datoCMSModelKey, mappingFn?) {
    const [menus, product] = await Promise.all([this.getMenus(), this.getProductData()])
    const datoCMSResponse = await this.requestDatoCMS(query)
    const content = datoCMSResponse[datoCMSModelKey]
    const mappedContent = mappingFn ? mappingFn(content) : content

    if (!content.seoTags) {
      console.warn('Page Data does not contain SeoTags')
    }
    return {
      appProps: {
        menu: menus.menu,
        footer: menus.footer,
        cookieNotice: menus.cookieNotice
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

  public async aboutUs(): Promise<IAboutUsPage> {
    return this.requestDatoCMSWithBaseData(ABOUT_US_QUERY, 'aboutUsPage', mapAboutUsData)
  }
}
