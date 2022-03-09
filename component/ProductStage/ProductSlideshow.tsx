/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import React, { useEffect, useState } from 'react'
import GradientSquare from '@component/GradientSquare'

interface IProductSlideshow {
  variantItem: any
  items: any[]
}

interface ISliderItem {
  image: DatoCMSResponsiveImage
}

const SliderItem: React.FC<ISliderItem> = ({ image }) => (
  <div className="overflow-hidden flex flex-wrap justify-center">
    <ResponsiveImage image={image} />
  </div>
)

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items, variantItem }) => {
  const [allItems, setAllItems] = useState([])
  console.log(variantItem.background)
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  return (
    <GradientSquare variantGradient={variantItem.background} className="mx-auto">
      <Slider className="w-full items-center">
        {allItems.map((item) => (
          <SliderItem image={item.image} key={item.id} />
        ))}
      </Slider>
    </GradientSquare>
  )
}

export default ProductSlideshow
