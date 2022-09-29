import React from 'react'
import { IShopifyCheckout } from '@modules/shopify/types'
import { getGenericDiscountLabel, getTotalDiscountAmount, toEuro } from '@lib/utils'

interface IProps {
  checkout: IShopifyCheckout
  label: string
}

const Discount: React.FC<IProps> = ({ checkout, label }) => (
  <div className="flex flex-wrap w-full text-tiny  font-textFontBold">
    <span className="mr-1">{label} </span>
    <span className="flex uppercase align-center self-center text-tiny tracking-wide">
      <span className="self-center">{getGenericDiscountLabel(checkout)}</span>
    </span>{' '}
    <div className="ml-auto  text-greenLink">-{toEuro(getTotalDiscountAmount(checkout))}</div>
  </div>
)

export default Discount
