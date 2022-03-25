import React from 'react'
import { IShopifyCheckout } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'

interface IProps {
  checkout: IShopifyCheckout
  label: string
}

const Subtotal: React.FC<IProps> = ({ checkout, label }) => (
  <>
    <div className="flex flex-wrap w-full justify-between text-sm md:text-base">
      <div>{label}:</div>
      <div className="ml-auto">{toEuro(Number(checkout.lineItemsSubtotalPrice.amount))}</div>
    </div>
  </>
)

export default Subtotal
