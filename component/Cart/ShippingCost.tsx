import React from 'react'

interface IProps {
  label: string
  value: string
}

const ShippingCost: React.FC<IProps> = ({ label, value }) => (
  <div className="flex flex-wrap w-full justify-between text-sm md:text-base font-subtitleFont">
    <div>{label}:</div>
    <div className="text-greenLink">{value}</div>
  </div>
)

export default ShippingCost
