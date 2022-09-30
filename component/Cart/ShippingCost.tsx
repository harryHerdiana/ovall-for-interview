import React from 'react'

// import { FREE_SHIPPING_THRESHOLD } from '@lib/constants'

interface IProps {
  label: string
  // subtotal: string
  textNoShippingCost: string
}

const ShippingCost: React.FC<IProps> = ({ label, textNoShippingCost }) => (
  // const hasFreeShipping = Number(subtotal) >= FREE_SHIPPING_THRESHOLD

  // if (!hasFreeShipping) {
  //   return null
  // }
  <div className="flex flex-wrap w-full justify-between text-tiny">
    <div className="font-textFont">{label}:</div>
    <div className="font-textFontBold text-greenLink">{textNoShippingCost}</div>
  </div>
)

export default ShippingCost
