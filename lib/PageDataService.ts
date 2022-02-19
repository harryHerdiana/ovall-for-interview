import datoCMSAPI from '@modules/datocms/api/client'
import { HOMEPAGE_QUERY } from '@modules/datocms/api/queries/homepage'
import PRODUCT_QUERY from '@modules/datocms/api/queries/product'
import { Pages } from './enums'
import { Context } from './types'
import { mapLocaleString } from './utils'

export default class PageDataService {
  context: Context

  constructor(context: Context) {
    this.context = context
  }

  private async homepage() {
    const pageData = await datoCMSAPI({
      query: HOMEPAGE_QUERY,
      variables: { locale: mapLocaleString(this.context.locale) }
    })

    return pageData
  }

  private async product() {
    const pageData = await datoCMSAPI({
      query: PRODUCT_QUERY,
      variables: { locale: mapLocaleString(this.context.locale) }
    })

    return pageData
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

  async get(page: string) {
    switch (page) {
      case Pages.Homepage: {
        const { homepage } = await this.homepage()
        return {
          ...homepage,
          menu: await this.getMenu()
        }
      }

      case Pages.ProductPage: {
        const { product } = await this.product()
        return {
          ...product,
          menu: await this.getMenu()
        }
      }

      default:
        throw new Error(`Unknown Pagename: ${page}`)
    }
  }
}
