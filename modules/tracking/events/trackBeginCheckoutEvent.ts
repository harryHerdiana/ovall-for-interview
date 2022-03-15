import { BRAND_NAME } from '@lib/constants'
import { IShopifyLineItem } from '@modules/shopify/types'
import { pushEcommerceEvent } from './utils'

export const trackBeginCheckoutEvent = (lineItems: IShopifyLineItem[]): void => {
  pushEcommerceEvent({
    event: 'begin_checkout',
    ecommerce: {
      items: lineItems.map((lineItem) => ({
        item_brand: BRAND_NAME,
        item_id: lineItem.variant.id,
        item_name: lineItem.title,
        price: lineItem.variant.priceV2.amount,
        quantity: lineItem.quantity
      }))
    }
  })

  pushEcommerceEvent({
    event: 'ua_checkout',
    ecommerce: {
      currencyCode: 'EUR',
      checkout: {
        actionField: {
          option: 'begin_checkout',
          step: 1
        },
        products: lineItems.map((lineItem: IShopifyLineItem) => ({
          brand: BRAND_NAME,
          category: '',
          coupon: '',
          id: lineItem.variant.sku,
          name: lineItem.variant.title,
          price: lineItem.variant.priceV2.amount,
          quantity: lineItem.quantity,
          variant: lineItem.variant.sku
        }))
      }
    }
  })
}
