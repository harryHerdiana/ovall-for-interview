import React from 'react'
import { IShopifyLineItem, IShopifyProductVariant } from '@modules/shopify/types'
import { getShopifyClient } from '@modules/shopify/api/buy/client'
import { Language } from '@lib/types'
import * as utils from '@lib/utils'
import fetchNewOrExistingCheckout from './fetchNewOrExistingCheckout'

/* eslint-disable */
export const defaultValues = {
  loading: false,
  setLoading: (bool: boolean) => { },
  addVariantToCart: (variant: IShopifyProductVariant, quantity: number) => { },
  updateLineItem: (lineItem: IShopifyLineItem, quantity: number): void => { },
  removeLineItem: (lineItem: IShopifyLineItem): void => { },
  setShowCart: (bool: boolean): void => { },
  products: {},
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
}

const localStorageKey = `shopify_checkout_id`

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider: React.FC<GlobalContext> = ({ children, locale }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [loading, setLoading] = React.useState(false)
  const [showCart, setShowCart] = React.useState(false)

  const initializeCheckout = async () => {
    const newOrExistingCheckout = await fetchNewOrExistingCheckout(
      getShopifyClient(locale as Language)
    )
    setCheckout(newOrExistingCheckout)
    utils.setLocalStorageSafe(localStorageKey, newOrExistingCheckout.id)
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
        // TODO: dispatch tracking event, t.b.d
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
          // TODO: track added quantity
        } else {
          // TODO: track reduced quantity
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
        // TODO: track remove line item from cart
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
        checkout
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContext
