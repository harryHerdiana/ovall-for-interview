import { IProductPage } from '@lib/types'
import React from 'react'

type DescriptionSection = IProductPage['descriptionSection']

const ProductDescription: React.FC<DescriptionSection> = ({ title, text }) => (
  <div className="text-left md:text-center mt-6 w-8/10 flex flex-col justify-center items-center">
    <h2 className="font-bold uppercase md:normal-case mb-4">{title}</h2>
    <div className="w-4/5">{text}</div>
  </div>
)

export default ProductDescription
