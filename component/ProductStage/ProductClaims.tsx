import React from 'react'
import Icon from '@component/Icon'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

type IProps = {
  productClaims: {
    id: string
    text: string
    title: string
    image?: DatoCMSResponsiveImage
  }[]
}
const ProductClaimsSection: React.FC<IProps> = ({ productClaims }) => (
  <div className="mt-6">
    {productClaims.map((productClaim) => (
      <div key={productClaim.id} className="flex items-start gap-4 mb-4">
        <Icon src="/images/check.svg" className="h-10 w-10" />
        <div className=" flex flex-col items-start justify-start text-left">
          <h3 className="mt-2">{productClaim.title}</h3>
          <div className="text-tiny">
            <p>{productClaim.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default ProductClaimsSection
