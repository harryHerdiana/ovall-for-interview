import { IDataLayerPayload } from '@modules/tracking/types'

export const pushToDatalayer = (payload: IDataLayerPayload): void => {
  if (window && !process.env.NEXT_PUBLIC_DISABLE_TRACKING) {
    window.dataLayer.push(payload)
  }
}

export const pushEcommerceEvent = (event: IDataLayerPayload): void => {
  pushToDatalayer({ ecommerce: null })
  pushToDatalayer(event)
}
