import { IShopifyCheckout } from '@modules/shopify/types'

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

const fetchNewOrExistingCheckout = async (shopifyClient): Promise<IShopifyCheckout> => {
  console.log('INIT CHECKOUT')
  const existingCheckoutID = isBrowser ? localStorage.getItem(localStorageKey) : null

  if (existingCheckoutID && existingCheckoutID !== `null`) {
    try {
      const existingCheckout = await shopifyClient.checkout.fetch(existingCheckoutID)

      if (!existingCheckout.completedAt) {
        return existingCheckout
      }
    } catch (e) {
      console.error('ERROR initializing checkout', e)
      localStorage.setItem(localStorageKey, null)
    }
  }

  return shopifyClient.checkout.create()
}

export default fetchNewOrExistingCheckout
