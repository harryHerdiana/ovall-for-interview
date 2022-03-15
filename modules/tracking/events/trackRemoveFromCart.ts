import { ICartTrackingData } from '../types'
import { pushEcommerceEvent } from './utils'

export const trackRemoveFromCart = (data: ICartTrackingData): void => {
  pushEcommerceEvent({
    event: 'remove_from_cart',
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
    event: 'ua_remove_from_cart',
    ecommerce: {
      currencyCode: 'EUR',
      remove: {
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
