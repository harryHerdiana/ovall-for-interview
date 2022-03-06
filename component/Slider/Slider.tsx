/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react'
import Slickslider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import Icon from '@component/Icon'

interface ISlider {
  children: React.ReactElement[]
  settings?: Record<string, unknown>
  className: string
}

const NextArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={className}
      style={{ ...style, display: 'flex', width: 'max-content' }}>
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

        transform: 'translateY(12px) rotate(180deg)'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const Slider: React.FC<ISlider> = ({ children, settings = {}, ...extraProps }) => {
  const sliderRef = useRef()
  const mergedSettings = { ...settings }
  return (
    <Slickslider
      ref={sliderRef}
      dotsClass="slick-dots custom-indicator"
      dots
      autoplaySpeed={6500}
      autoplay={false}
      infinite
      slidesToShow={1}
      slidesToScroll={1}
      fade={false}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      {...mergedSettings}
      {...extraProps}>
      {children}
    </Slickslider>
  )
}

export default Slider
