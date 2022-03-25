import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'
import GradientSquare from '@component/GradientSquare'

type IInfoTechSectionProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
}

const InfoTechSection: React.FC<IInfoTechSectionProps> = ({
  backgroundColor,
  image,
  title,
  body
}) => (
  <GradientRectangle
    contentPlacement="left"
    variantGradient={backgroundColor}
    className="block lg:h-max lg:min-h-465px">
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:h-max max-w-site mx-auto">
      <div className="flex-col items-start h-max justify-center w-full pt-8 p-4 lg:p-0 bg-white lg:bg-transparent lg:mt-0 lg:pl-8">
        <div className="flex flex-col lg:mb-0">
          <h2 className="mb-2 mt-1">{title}</h2>
          <p className="mt-4 mb-4">{body}</p>
        </div>
      </div>
      <GradientSquare className="lg:bg-none" variantGradient={backgroundColor}>
        <ResponsiveImage
          image={image}
          className="flex justify-start md:justify-center lg:justify-center h-full lg:w-full px-4 md:px-0"
        />
      </GradientSquare>
    </div>
  </GradientRectangle>
)

export default InfoTechSection
