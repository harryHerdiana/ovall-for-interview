import { IShopifyCheckout } from '@modules/shopify/types'
import { LOCALSTORAGE_CHECKOUT_KEY } from '@lib/constants'

const isBrowser = typeof window !== `undefined`

const fetchNewOrExistingCheckout = async (shopifyClient): Promise<IShopifyCheckout> => {
  const existingCheckoutID = isBrowser ? localStorage.getItem(LOCALSTORAGE_CHECKOUT_KEY) : null

  if (existingCheckoutID && existingCheckoutID !== `null`) {
    try {
      const existingCheckout = await shopifyClient.checkout.fetch(existingCheckoutID)

      if (!existingCheckout.completedAt) {
        return existingCheckout
      }
    } catch (e) {
      console.error('ERROR initializing checkout', e)
      localStorage.setItem(LOCALSTORAGE_CHECKOUT_KEY, null)
    }
  }

  return shopifyClient.checkout.create()
}

export default fetchNewOrExistingCheckout
