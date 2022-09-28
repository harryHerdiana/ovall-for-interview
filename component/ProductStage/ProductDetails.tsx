import React from 'react'

import { ProductDetailsProps } from '@lib/types'
import Icon from '@component/Icon'

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, items }) => (
  <div className="mt-14 text-left">
    <h2>{title}</h2>
    <div className="mt-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center my-4">
          <div className="flex items-center justify-center min-w-[50px] ">
            <Icon src={`/images/${item.icon}.svg`} className="h-[40px] w-[40px]" />
          </div>
          <p className="ml-5">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
)
export default ProductDetails
