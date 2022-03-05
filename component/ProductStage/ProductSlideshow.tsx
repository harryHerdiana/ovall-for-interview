import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

import React, { useEffect, useState } from 'react'

interface IProductSlideshow {
  variantItem: any
  items: any[]
}

interface ISliderItem {
  image: DatoCMSResponsiveImage
  backgroundColor: string
}

const SliderItem: React.FC<ISliderItem> = ({ image, backgroundColor }) => (
  <div className="overflow-hidden flex flex-wrap">
    <ResponsiveImage image={image} />
  </div>
)

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items, variantItem }) => {
  const [allItems, setAllItems] = useState([])
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  return (
    <Slider className="w-full">
      {allItems.map((item) => (
        <SliderItem image={item.image} key={item.id} backgroundColor={item.background} />
      ))}
    </Slider>
  )
}

export default ProductSlideshow
