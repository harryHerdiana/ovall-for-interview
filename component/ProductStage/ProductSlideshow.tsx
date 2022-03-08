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

const NextArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: 'flex',
        transform: 'translateX(100px) translateY(-10px) ',
        width: 'max-content'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const NextArrowMob = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: 'flex',
        transform: 'translateX(60px) translateY(-10px) ',
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

        transform: 'translateY(12px) translateX(-100px) rotate(180deg)'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}
const PrevArrowMob = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...style,
        display: 'flex',
        width: 'max-content',

        transform: 'translateY(12px) translateX(-60px) rotate(180deg)'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
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

  function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
  }
  const [width, height] = useWindowSize()
  const [setting, setSetting] = useState({})
  useEffect(() => {
    if (width <= 767) {
      setSetting({
        nextArrow: <NextArrowMob />,
        prevArrow: <PrevArrowMob />
      })
    } else {
      setSetting({
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      })
    }
  }, [width])
  return (
    <GradientSquare variantGradient={variantItem.background} className="m-auto px-10 md:px-20">
      <Slider settings={setting} className="w-full items-center py-12 lg:py-10 h-max">
        {allItems.map((item) => (
          <SliderItem image={item.image} key={item.id} />
        ))}
      </Slider>
    </GradientSquare>
  )
}

export default ProductSlideshow
