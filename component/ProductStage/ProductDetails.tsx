import React from 'react'

import { ProductDetailsProps } from '@lib/types'
import Icon from '@component/Icon'

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, items }) => (
  <div className="mt-14">
    <h2>{title}</h2>
    <div className="mt-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center my-4">
          <Icon src={`/images/${item.icon}.svg`} className="h-10 w-10" />
          <p className="ml-6">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
)
export default ProductDetails
