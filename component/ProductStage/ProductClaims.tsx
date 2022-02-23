import React from 'react'
import Icon from '@component/Icon'
interface IProductClaims {
  productClaims: {
    text: string
    title: string
  }[]
}

const ProductClaimsSection: React.FC<IProductClaims> = ({ productClaims }) => (
  <div>
    {productClaims.map((productClaim) => (
      <>
        <div key={productClaim.title} className="flex items-start gap-4 mb-4">
          <Icon src="/images/check.svg" className="h-10 w-10" />
          <div className=" flex flex-col items-start justify-start text-left">
            <div className="font-bold text-md">{productClaim.title.toUpperCase()}</div>
            <div className="text-md">{productClaim.text}</div>
          </div>
        </div>
      </>
    ))}
  </div>
)

export default ProductClaimsSection
