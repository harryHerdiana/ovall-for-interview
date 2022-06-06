import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'

export interface IBeforeAfterBannerProps {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  kicker: string
  disclaimer: string
  items: {
    id: string
    percentage: string
    text: string
  }[]
}

const BeforeAfterBanner: React.FC<IBeforeAfterBannerProps> = ({
  backgroundColor,
  image,
  title,
  kicker,
  disclaimer,
  items
}) => (
  <GradientRectangle
    className="block lg:min-h-235px lg:h-max mb-100px"
    contentPlacement="left"
    variantGradient={backgroundColor}>
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center max-w-site lg:mx-auto">
      <div className="flex-col items-start h-max justify-center w-full lg:w-full p-4  md:-mt-16 lg:mt-0 lg:mr-8 lg:pl-8">
        <div className="flex flex-col mb-4 lg:mb-0 mt-4 lg:mt-0">
          <span className="kicker">{kicker}</span>
          <h2 className="mb-6 mt-2">{title}</h2>
          <div className="grid md:grid-cols-3 md:gap-16 gap-5">
            {items.map((item) => (
              <div className="md:block grid grid-cols-2" key={item.id}>
                <h3 className="text-xxl2 font-bold my-auto md:mt-4 md:mb-8">{item.percentage}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-12">{disclaimer}</p>
        </div>
      </div>
      <ResponsiveImage
        lazyLoad={false}
        image={image}
        className="flex justify-start mx-auto w-auto lg:w-4/5 h-full md:justify-center mb-50px lg:mb-0 lg:py-10"
      />
    </div>
  </GradientRectangle>
)

export default BeforeAfterBanner
