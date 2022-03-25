import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import Button from '@component/Button'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'
import GradientSquare from '@component/GradientSquare'

type IInfoBannerSectionProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
  buttonText?: string
  onClickButton?: () => void
}

const InfoBannerSection: React.FC<IInfoBannerSectionProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  onClickButton
}) => (
  <GradientRectangle
    contentPlacement="left"
    variantGradient={backgroundColor}
    className="block lg:h-max lg:min-h-465px">
    <div className="flex flex-col-reverse lg:flex-row lg:items-center max-w-site mx-auto">
      <div className="flex-col items-start h-max justify-center w-full pt-8 p-4 lg:p-0 bg-white lg:bg-transparent lg:mt-0 lg:pl-8 ">
        <div className="flex flex-col lg:mb-0">
          <h2 className="mb-2 mt-1">{title}</h2>
          <p className="mt-4 mb-4">{body}</p>
          {buttonText && (
            <Button
              onClick={onClickButton}
              type="button"
              buttonType="secondary"
              className="button-product-details">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
      <GradientSquare className="lg:bg-none lg:self-end" variantGradient={backgroundColor}>
        <ResponsiveImage
          image={image}
          className="flex justify-start md:justify-center lg:justify-end h-max lg:w-full "
        />
      </GradientSquare>
    </div>
  </GradientRectangle>
)

export default InfoBannerSection
