/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import React, { useEffect, useState } from 'react'
import GradientSquare from '@component/GradientSquare'
import Icon from '@component/Icon'

interface IProductSlideshow {
  variantItem: any
  items: any[]
}

const NextArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: 'flex',
        transform: 'translateX(70px) translateY(-10px) ',
        width: 'max-content'
      }}>
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
      style={{
        ...style,
        display: 'flex',
        width: 'max-content',

        transform: 'translateY(12px) translateX(-70px) rotate(180deg)'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const setting = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
  // customPaging: () => (
  //   <div className="mt-2 rounded-full w-3 h-3 bg-white border-2 border-black focus:bg-black" />
  // ),
  // dots: true,
  // appendDots: (dots) => <ul>{dots}</ul>
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
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  return (
    <GradientSquare variantGradient={variantItem.background} className="m-auto px-12">
      <Slider settings={setting} className="w-full items-center py-12 lg:py-16 h-max">
        {allItems.map((item) => (
          <SliderItem image={item.image} key={item.id} />
        ))}
      </Slider>
    </GradientSquare>
  )
}

export default ProductSlideshow
