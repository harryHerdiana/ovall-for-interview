import datoCMSAPI from '@modules/datocms/api/client'
import HOMEPAGE_QUERY from '@modules/datocms/api/queries/homepage'
import PRODUCT_QUERY from '@modules/datocms/api/queries/product'
import shopifyStoreFrontAPI from '@modules/shopify/api/storefront/client'
import { GET_PRODUCT } from '@modules/shopify/api/storefront/queries'
import parseProductResponse from '@modules/shopify/api/storefront/parser'
import { IShopifyProduct } from '@modules/shopify/types'
import { Context, IHomePageData, IProductPageData } from './types'
import { mapLocaleString } from './utils'

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
  }

  private async getMenu(): Promise<any> {
    return [
      {
        id: '1',
        label: 'Product',
        path: '/products/ovall'
      }
    ]
  }

  /**
   * @param query graphql query string
   * @param entryKey model name in datocms
   * @returns IPageProps
   */
  private async requestDatoCMSWithBaseData(query, datoCMSModelKey) {
    const [menu, shopifyProduct] = await Promise.all([this.getMenu(), this.getProductData()])
    const datoCMSResponse = await this.requestDatoCMS(query)
    const content = datoCMSResponse[datoCMSModelKey]

    if (!content.seoTags) {
      // throw new Error('Page Data does not include SeoTags')
      console.warn('Page Data does not contain SeoTags')
    }
    return {
      menu,
      shopifyProduct,
      ...content
    }
  }

  public async homepage(): Promise<IHomePageData> {
    return this.requestDatoCMSWithBaseData(HOMEPAGE_QUERY, 'homepage')
  }

  public async product(): Promise<IProductPageData> {
    return this.requestDatoCMSWithBaseData(PRODUCT_QUERY, 'product')
  }
}
