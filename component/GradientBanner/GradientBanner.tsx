import React from 'react'
import Icon from '@component/Icon'
import GradientRectangle from '@component/GradientRectangle'
import { IProductPage } from '@lib/types'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

interface IGradientBanner extends IProductPage.productInfoBannerSection {
  variant: 'people' | 'blue' | 'green' | 'pink'
  contentPlacement: 'left' | 'right'

  body: string
  buttonText: string
}

// eslint-disable-next-line arrow-body-style
const GradientBanner: React.FC<IGradientBanner> = ({
  variant,
  contentPlacement,
  body,
  buttonText
  // eslint-disable-next-line arrow-body-style
}) => {
  return (
    <div className="flex h-80">
      <div
        className={`${variant}_solid_left ${
          contentPlacement === 'left' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-end justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">Title here</div>
          <div className="text-sm my-4">{body}</div>
          <div className="uppercase text-sm flex items-center gap-6">
            {buttonText} <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <GradientRectangle variantGradient={variant} className="w-1/2" />
      <div
        className={`${variant}_solid_right ${
          contentPlacement === 'right' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-start justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">Title here</div>
          <div className="text-sm my-4">{body}</div>
          <div className="uppercase text-sm flex items-center gap-6">
            {buttonText} <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default GradientBanner
