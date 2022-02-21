import React from 'react'

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
        <div>{productClaim.title}</div>
        <div>{productClaim.text}</div>
      </>
    ))}
  </div>
)

export default ProductClaimsSection
