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
    <div className="pb-4 md:pb-16  z-auto">
      {checkout.lineItems.map((lineItem: IShopifyLineItem, index) => (
        <>
          <LineItem lineItem={lineItem} key={lineItem.id} />
          {index !== checkout.lineItems.length - 1 && <hr className="border-grayLine w-full" />}
        </>
      ))}
    </div>
  )
}

export default Cart
