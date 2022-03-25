import React from 'react'
import { IShopifyCheckout } from '@modules/shopify/types'
import { getGenericDiscountLabel, getTotalDiscountAmount, toEuro } from '@lib/utils'
import Icon from '@component/Icon'

interface IProps {
  checkout: IShopifyCheckout
  label: string
}

const Discount: React.FC<IProps> = ({ checkout, label }) => (
  <div className="flex flex-wrap w-full text-sm md:text-base">
    <span className="mr-1 font-bold font-subtitleFont">{label}: </span>
    <span className="flex uppercase align-center self-center text-xs md:text-sm tracking-wide">
      <Icon src="/images/invest.svg" className="inline h-5 w-5" />
      <span className="self-center">{getGenericDiscountLabel(checkout)}</span>
    </span>{' '}
    <div className="ml-auto font-bold font-subtitleFont">
      -{toEuro(getTotalDiscountAmount(checkout))}
    </div>
  </div>
)

export default Discount
