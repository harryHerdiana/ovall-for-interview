/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import Icon from '@component/Icon'

type ILpSlideShowProps = {
  items: DatoCMSResponsiveImage[]
}

interface ILpSlideItem {
  id: number
  image: DatoCMSResponsiveImage
}

const NextArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div onClick={onClick} className={`${className} lp_next`} style={{ ...style }}>
      <div className="rounded-full bg-gray-200">
        <Icon src="/images/arrow-small.svg" className="h-8 w-8" />
      </div>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div onClick={onClick} className={`${className} lp_prev`} style={{ ...style }}>
      <div className="rounded-full bg-gray-200">
        <Icon src="/images/arrow-small.svg" className="h-8 w-8" />
      </div>
    </div>
  )
}

const LpSliderItem: React.FC<ILpSlideItem> = ({ image, id }) => (
  <div
    className=" lg:w-full mx-auto flex flex-wrap justify-center max-w-fullhd px-2"
    id={`landingpage-slider-item-${id}`}>
    <ResponsiveImage image={image} usePlaceholder={false} className="" />
  </div>
)

const LandingpageSlideShow: React.FC<ILpSlideShowProps> = ({ items }) => {
  const setting = {
    swipeToSlide: true,
    className: 'center',
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  }
  return (
    <section className="mx-auto lg:text-center my-60px lg:my-70px max-w-fullHd">
      <Slider name="MoodSlideShow" settings={setting} className="w-full items-center h-max">
        {items.map((item, index) => (
          <LpSliderItem id={index} image={item} key={`slide-${index}`} />
        ))}
      </Slider>
    </section>
  )
}

export default LandingpageSlideShow
