import { IProductPageData } from '@lib/types'
import React from 'react'

interface IProductDescription extends IProductPageData {
  productDescriptionSection: {
    text: string
  }[]
}

const ProductDescription: React.FC<IProductDescription> = ({ productDescriptionSection }) => (
  <div className="text-left md:text-center mt-6 w-8/10 flex flex-col justify-center items-center">
    <div className="font-bold uppercase md:normal-case mb-4">
      {productDescriptionSection[0].text}
    </div>
    <div className="w-4/5">{productDescriptionSection[1].text}</div>
  </div>
)

export default ProductDescription
