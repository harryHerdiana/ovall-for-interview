/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import Icon from '@component/Icon'

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

const NextArrow = (props) => {
  const { onClick, className } = props
  return (
    <div onClick={onClick} className={className}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, transform: 'rotate(180deg)', display: 'block' }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const setting = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items, variantItem }) => {
  const [allItems, setAllItems] = useState([])
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  return (
    <Slider settings={setting} className="w-full">
      {allItems.map((item) => (
        <SliderItem image={item.image} key={item.id} backgroundColor={item.background} />
      ))}
    </Slider>
  )
}

export default ProductSlideshow
