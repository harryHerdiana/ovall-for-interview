import React from 'react'
import Slickslider from 'react-slick'

const defaultSettings = {
  dots: true,
  autoplaySpeed: 6500,
  autoplay: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />
}

interface ISlider {
  children: React.ReactElement[]
  settings?: Record<string, unknown>
  className: string
}

const Slider: React.FC<ISlider> = ({ children, settings = {}, ...extraProps }) => {
  const mergedSettings = { ...defaultSettings, ...settings }
  return (
    <Slickslider {...mergedSettings} {...extraProps}>
      {children}
    </Slickslider>
  )
}

export default Slider
