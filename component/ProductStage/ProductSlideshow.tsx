import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { IProductSlideshowImage } from '@lib/types'

import React from 'react'

interface IProductSlideshow {
  items: IProductSlideshowImage[]
}

const SliderItem: React.FC<any> = ({ image, backgroundColor }) => (
  <div className="overflow-hidden flex flex-wrap">
    <ResponsiveImage image={image} />
  </div>
)

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items }) => {
  const x = 17
  return (
    <Slider className="w-full">
      {items.map((item) => (
        <SliderItem image={item.image} key={item.id} backgroundColor={item.background} />
      ))}
    </Slider>
  )
}

export default ProductSlideshow
