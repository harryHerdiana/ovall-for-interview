import { BRAND_NAME } from '@lib/constants'
import { IShopifyProductVariant } from '@modules/shopify/types'
import { pushEcommerceEvent } from './utils'

export const trackViewItemEvent = (variant: IShopifyProductVariant): void => {
  pushEcommerceEvent({
    event: 'view_item',
    ecommerce: {
      items: [
        {
          item_name: variant.title,
          item_id: variant.sku,
          item_brand: BRAND_NAME,
          price: variant.priceV2.amount,
          quantity: 1
        }
      ]
    }
  })

  pushEcommerceEvent({
    event: 'ua_view_item',
    ecommerce: {
      currencyCode: 'EUR',
      detail: {
        products: [
          {
            brand: BRAND_NAME,
            category: '',
            coupon: '',
            id: variant.sku,
            name: variant.title,
            price: variant.priceV2.amount,
            quantity: 1,
            variant: ''
          }
        ]
      }
    }
  })
}

export default trackViewItemEvent
