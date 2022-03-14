import React from 'react'

import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { ICartText } from '@lib/types'
import LineItem from './LineItem'

const Cart: React.FC<ICartText> = ({ cartEmpty }) => {
  const { checkout } = React.useContext(ShopContext)

  if (checkout.lineItems.length === 0) {
    return (
      <div className="text-center text-gray-300 font-bold text-base">
        <span className="block px-16 py-20">{cartEmpty}</span>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-4 md:pb-16 divide-y">
      {checkout.lineItems.map((lineItem: IShopifyLineItem) => (
        <LineItem lineItem={lineItem} key={lineItem.id} />
      ))}
    </div>
  )
}

export default Cart
