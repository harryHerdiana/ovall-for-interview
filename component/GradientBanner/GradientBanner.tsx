import React from 'react'
import Icon from '@component/Icon'
import GradientRectangle from '@component/GradientRectangle'
import { IProductPage } from '@lib/types'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'

type IGradientBannerProps = {
  productInfoBannerSection: {
    backgroundColor: string
    image: DatoCMSResponsiveImage
    title: string
    body: string
    buttonText: string
    dropDownText: StructuredTextDocument
  }
  variant: 'people' | 'blue' | 'green' | 'pink'
  contentPlacement: 'left' | 'right'

  // body: string
  // buttonText: string
}

// eslint-disable-next-line arrow-body-style
const GradientBanner: React.FC<IGradientBannerProps> = ({
  productInfoBannerSection,
  contentPlacement,
  variant

  // eslint-disable-next-line arrow-body-style
}) => {
  return (
    <div className="flex h-80">
      <div
        className={`${variant}_solid_left ${
          contentPlacement === 'left' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-end justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">{productInfoBannerSection.title}</div>
          <div className="text-sm my-4">{productInfoBannerSection.body}</div>
          <div className="uppercase text-sm flex items-center gap-6">
            {productInfoBannerSection.buttonText}{' '}
            <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <GradientRectangle
        variantGradient={productInfoBannerSection.backgroundColor}
        className="w-1/2"
      />
      <div
        className={`${variant}_solid_right ${
          contentPlacement === 'right' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-start justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">{productInfoBannerSection.title}</div>
          <div className="text-sm my-4">{productInfoBannerSection.body}</div>
          <div className="uppercase text-sm flex items-center gap-6">
            {productInfoBannerSection.buttonText}
            <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default GradientBanner
