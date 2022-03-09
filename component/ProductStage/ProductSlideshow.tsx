/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import GradientSquare from '@component/GradientSquare'
import Icon from '@component/Icon'

interface IProductSlideshow {
  variantItem: any
  items: any[]
}

const NextArrow: React.FC<any> = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={`${className} slideshow_next`}
      style={{
        ...style
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const PrevArrow: React.FC<any> = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={`${className} slideshow_prev`}
      style={{
        ...style
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

interface ISliderItem {
  image: DatoCMSResponsiveImage
}

const SliderItem: React.FC<ISliderItem> = ({ image }) => (
  <div className="overflow-hidden flex flex-wrap justify-center h-max w-max">
    <ResponsiveImage image={image} />
  </div>
)

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items, variantItem }) => {
  const [allItems, setAllItems] = useState([])
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  const setting = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  console.log(items)
  return (
    <Slider settings={setting} className="w-full items-center h-max">
      {allItems.map((item) => (
        <GradientSquare key={item.id} variantGradient={item.background} className="m-auto ">
          <SliderItem image={item.image} key={item.id} />
        </GradientSquare>
      ))}
    </Slider>
  )
}

export default ProductSlideshow
