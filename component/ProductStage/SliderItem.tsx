import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

interface ISliderItem {
  image: DatoCMSResponsiveImage
}

const SliderItem: React.FC<ISliderItem> = ({ image }) => (
  <div className="overflow-hidden flex flex-col w-full lg:w-1/3 px-4 lg:px-8 pb-8">
    <div className="flex flex-col transform transition-all hover:cursor-pointer hover:z-10 hover:scale-110">
      <div className="flex flex-wrap relative mt-8 mx-auto justify-center items-center hover:shadow-lg hover:cursor-pointer">
        <ResponsiveImage usePlaceholder={false} image={image} />
      </div>
    </div>
  </div>
)

export default SliderItem
