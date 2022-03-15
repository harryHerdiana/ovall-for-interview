import React from 'react'
import { IShopifyLineItem, IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import { getShopifyClient } from '@modules/shopify/api/buy/client'
import { Language } from '@lib/types'
import * as utils from '@lib/utils'
import { BRAND_NAME, LOCALSTORAGE_CHECKOUT_KEY } from '@lib/constants'
import { trackAddToCartEvent, trackRemoveFromCart } from '@modules/tracking/events'
import fetchNewOrExistingCheckout from './fetchNewOrExistingCheckout'

/* eslint-disable */
export const defaultValues = {
  loading: false,
  setLoading: (bool: boolean) => { },
  addVariantToCart: (variant: IShopifyProductVariant, quantity: number) => { },
  updateLineItem: (lineItem: IShopifyLineItem, quantity: number): void => { },
  removeLineItem: (lineItem: IShopifyLineItem): void => { },
  setShowCart: (bool: boolean): void => { },
  product: null,
  checkout: {
    id: null,
    lineItems: [],
    totalPrice: null,
    webUrl: ''
  },
  showCart: false,
}
/* eslint-enable */

export interface GlobalContext {
  children?: JSX.Element
  locale: string
  shopifyProduct: IShopifyProduct
}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider: React.FC<GlobalContext> = ({ children, locale, shopifyProduct }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [loading, setLoading] = React.useState(false)
  const [showCart, setShowCart] = React.useState(false)
  const [product] = React.useState(shopifyProduct)

  const initializeCheckout = async () => {
    const newOrExistingCheckout = await fetchNewOrExistingCheckout(
      getShopifyClient(locale as Language)
    )
    setCheckout(newOrExistingCheckout)
    utils.setLocalStorageSafe(LOCALSTORAGE_CHECKOUT_KEY, newOrExistingCheckout.id)
  }

  React.useEffect(() => {
    initializeCheckout()
  }, [])

  const addVariantToCart = (variant: IShopifyProductVariant, quantity = 1) => {
    const checkoutID = checkout.id

    const lineItemsToUpdate = [
      {
        variantId: variant.id,
        quantity
      }
    ]

    setLoading(true)
    return getShopifyClient(locale as Language)
      .checkout.addLineItems(checkoutID, lineItemsToUpdate)
      .then((response) => {
        trackAddToCartEvent({
          brand: BRAND_NAME,
          itemId: variant.sku,
          quantity,
          price: variant.priceV2.amount,
          itemName: variant.title
        })
        setCheckout(response)
        setLoading(false)
      })
  }

  const updateLineItem = (lineItem, quantity) => {
    setLoading(true)
    const lineItemsToUpdate = [{ id: lineItem.id, quantity: parseInt(quantity, 10) }]
    return getShopifyClient(locale as Language)
      .checkout.updateLineItems(checkout.id, lineItemsToUpdate)
      .then((response) => {
        if (quantity > lineItem.quantity) {
          trackAddToCartEvent({
            brand: BRAND_NAME,
            itemId: lineItem.variant.sku,
            quantity,
            price: lineItem.variant.priceV2.amount,
            itemName: lineItem.variant.title
          })
        } else {
          trackRemoveFromCart({
            brand: BRAND_NAME,
            itemId: lineItem.variant.sku,
            quantity,
            price: lineItem.variant.priceV2.amount,
            itemName: lineItem.variant.title
          })
        }
        setCheckout(response)
        setLoading(false)
      })
  }

  const removeLineItem = (lineItem: IShopifyLineItem) => {
    setLoading(true)
    return getShopifyClient(locale as Language)
      .checkout.removeLineItems(checkout.id, [lineItem.id])
      .then((res) => {
        trackRemoveFromCart({
          brand: BRAND_NAME,
          itemId: lineItem.variant.sku,
          quantity: lineItem.quantity,
          price: lineItem.variant.priceV2.amount,
          itemName: lineItem.variant.title
        })
        setCheckout(res)
        setLoading(false)
      })
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        loading,
        setLoading,
        addVariantToCart,
        updateLineItem,
        removeLineItem,
        setShowCart,
        showCart,
        checkout,
        product
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
