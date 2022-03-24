import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import { StructuredText, StructuredTextDocument } from 'react-datocms'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'
import GradientSquare from '@component/GradientSquare'
import Icon from '@component/Icon'

type IInfoBannerFeaturesProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  items?: {
    id: string
    icon: string
    title: string
    text: StructuredTextDocument
  }[]
}

const InfoBannerFeatures: React.FC<IInfoBannerFeaturesProps> = ({
  backgroundColor,
  image,
  title,
  items
}) => (
  <GradientRectangle contentPlacement="left" variantGradient={backgroundColor}>
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center lg:h-max max-w-site lg:max-h-540px mx-auto">
      <div className="flex-col items-start h-max justify-center w-full pt-8 p-4 lg:p-0 bg-white lg:bg-transparent lg:mt-0 lg:pl-8">
        <div className="flex flex-col lg:mb-0">
          <h2 className="mb-2 mt-1">{title}</h2>
          <div className="mt-4">
            {items.map((item) => (
              <div key={item.id} className="flex">
                <Icon src={`/images/${item.icon}.svg`} className="h-12 w-12" />
                <div className="ml-4 mb-7">
                  <h3 className="mb-3">{item.title}</h3>
                  <StructuredText data={item.text} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GradientSquare className="lg:bg-none" variantGradient={backgroundColor}>
        <ResponsiveImage
          image={image}
          className="flex justify-start md:justify-center lg:justify-center h-max lg:w-full lg:pt-11 lg:mr-16"
        />
      </GradientSquare>
    </div>
  </GradientRectangle>
)

export default InfoBannerFeatures
