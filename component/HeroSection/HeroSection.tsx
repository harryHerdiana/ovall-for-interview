import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'
import GradientSquare from '@component/GradientSquare'

type IHeroSectionProps = {
  backgroundColor: string
  image?: DatoCMSResponsiveImage
  title?: string
  kicker?: string
  body?: string
}

const HeroSection: React.FC<IHeroSectionProps> = ({
  backgroundColor,
  image,
  title,
  kicker,
  body
}) => (
  <GradientRectangle
    className="block lg:h-max lg:min-h-465px"
    contentPlacement="left"
    variantGradient={backgroundColor}>
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center max-w-site lg:mx-auto">
      <div className="flex-col items-start h-max justify-center w-full  lg:w-full p-4 lg:p-0 lg:mt-0 lg:mr-8  bg-white lg:bg-transparent">
        <div className="flex flex-col gap-2 -mb-1 mt-4 ">
          <div className="h3_element">{title}</div>
          <h2 className="my-0">{kicker || body}</h2>
        </div>
      </div>
      <GradientSquare className="lg:bg-none" variantGradient={backgroundColor}>
        <ResponsiveImage
          lazyLoad={false}
          image={image}
          className="flex justify-start md:justify-center items-end lg:justify-center h-max lg:w-full "
        />
      </GradientSquare>
    </div>
  </GradientRectangle>
)

export default HeroSection
