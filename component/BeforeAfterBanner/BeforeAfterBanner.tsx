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
          <div className="grid md:grid-cols-3 md:gap-16 gap-5 ">
            {items.map((item) => (
              <div className="md:block grid grid-cols-2 place-items-start" key={item.id}>
                <div className=" place-items-start place-self-start">
                  <h3 className="text-xxl2 leading-none font-bold"> {item.percentage}</h3>
                </div>
                <p className="place-self-center lg:mt-3 lg:translate-y-0 -translate-y-[5px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-12">{disclaimer}</p>
        </div>
      </div>
      <ResponsiveImage
        lazyLoad={false}
        image={image}
        className="flex justify-start lg:w-4/5 w-auto h-full place-self-end md:justify-end mb-50px lg:mb-0 lg:py-10 drop-shadow-2xl"
      />
    </div>
  </GradientRectangle>
)

export default BeforeAfterBanner
