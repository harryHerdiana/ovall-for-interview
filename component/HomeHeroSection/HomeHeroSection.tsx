import React from 'react'
import Button from '@component/Button'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'

type IHomeHeroSectionProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
  buttonText?: string
  onClickButton?: () => void
}

const HomeHeroSection: React.FC<IHomeHeroSectionProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  onClickButton
}) => (
  <GradientRectangle
    className="block lg:h-max lg:min-h-540px"
    contentPlacement="right"
    variantGradient={backgroundColor}>
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center max-w-site lg:mx-auto">
      <ResponsiveImage
        lazyLoad={false}
        image={image}
        className="flex justify-start  w-full h-full md:justify-center "
      />
      <div className="flex-col items-start h-max justify-center w-full lg:w-full p-4 lg:p-0 -mt-16 lg:mt-0 lg:mr-8">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="mb-0 mt-0">{title}</h2>
          <p className="my-4 ">{body}</p>
          <Button
            onClick={onClickButton}
            type="button"
            buttonType="primary"
            className="button-product-details lg:w-4/5">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  </GradientRectangle>
)

export default HomeHeroSection
