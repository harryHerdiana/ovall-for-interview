import React from 'react'
import { useTranslation } from 'next-i18next'

import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import LineItem from './LineItem'

interface ICart {}

// TODO: add German text below into DatoCMS model with shop-wide stuff (navigation, footer, etc.)

const Cart: React.FC<ICart> = () => {
  const { t } = useTranslation('common')
  const { checkout } = React.useContext(ShopContext)

  if (checkout.lineItems.length === 0) {
    return (
      <div className="text-center text-gray-300 font-bold text-base">
        <span className="block px-16 py-20">Noch keine Produkte im Warenkorb</span>
      </div>
    )
  }

  return (
    <div className="pb-4 md:pb-16  z-auto">
      {checkout.lineItems.map((lineItem: IShopifyLineItem) => (
        <LineItem lineItem={lineItem} key={lineItem.id} />
      ))}
    </div>
  )
}

export default Cart
