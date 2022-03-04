import { ICartTrackingData } from '../types'
import { pushEcommerceEvent } from './utils'

export const trackAddToCartEvent = (data: ICartTrackingData) => {
  pushEcommerceEvent({
    event: 'add_to_cart',
    ecommerce: {
      items: [
        {
          item_brand: data.brand,
          item_id: data.itemId,
          item_name: data.itemName,
          price: data.price,
          quantity: data.quantity
        }
      ]
    }
  })

  pushEcommerceEvent({
    event: 'ua_add_to_cart',
    ecommerce: {
      currencyCode: 'EUR',
      add: {
        products: [
          {
            brand: data.brand,
            category: '',
            coupon: '',
            id: data.itemId,
            name: data.itemName,
            price: data.price,
            quantity: data.quantity,
            variant: data.itemId
          }
        ]
      }
    }
  })
}
