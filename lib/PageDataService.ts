import datoCMSAPI from '@modules/datocms/api/client'
import { HOMEPAGE_QUERY } from '@modules/datocms/api/queries/homepage'
import { Pages } from './enums'
import { Context } from './types'
import { mapLocaleString } from './utils'

export default class PageDataService {
  context: Context

  constructor(context: Context) {
    this.context = context
  }

  async get(page: string) {
    switch (page) {
      case Pages.Homepage: {
        return datoCMSAPI({
          query: HOMEPAGE_QUERY,
          variables: { locale: mapLocaleString(this.context.locale) }
        })
      }

      default:
        throw new Error(`Unknown Pagename: ${page}`)
    }
  }
}
