import React from 'react'
import Icon from '@component/Icon'
import { DatoCMSImage } from '@modules/datocms/types'

type IProps = {
  productClaims: {
    id: string
    text: string
    title: string
    image?: DatoCMSImage
  }[]
}
const ProductClaimsSection: React.FC<IProps> = ({ productClaims }) => (
  <div className="mt-6">
    {productClaims.map((productClaim) => (
      <div key={productClaim.id} className="flex items-start gap-4 mb-4">
        <Icon src="/images/check.svg" className="h-10 w-10" />
        <div className=" flex flex-col items-start text-left">
          <h3 className="mt-2">{productClaim.title}</h3>
          <div className="text-tiny flex">
            <p>{productClaim.text}</p>
          </div>
          {productClaim.image && (
            <div className="w-full h-full flex items-center justify-start">
              <Icon className="h-8  w-auto my-2" src={`${productClaim.image.url}`} />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)
export default ProductClaimsSection
