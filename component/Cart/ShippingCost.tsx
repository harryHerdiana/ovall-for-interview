import React from 'react'

interface IProps {
  label: string
  value: string
}

const ShippingCost: React.FC<IProps> = ({ label, value }) => (
  <div className="flex flex-wrap w-full justify-between text-tiny">
    <div className="font-textFont">{label}:</div>
    <div className="font-textFontBold text-greenLink">{value}</div>
  </div>
)

export default ShippingCost
