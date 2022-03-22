/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import ResponsiveImage from '@component/ResponsiveImage'
import { IMoodSlideshowItem } from '@lib/types'
import Slider from '@component/Slider'
import Icon from '@component/Icon'

type IMoonSlideShowProps = {
  kicker: string
  title: string
  items: IMoodSlideshowItem[]
}

interface IMoodSliderItem {
  id: number
  image: DatoCMSResponsiveImage
  title: string
  text: string
}

const NextArrow: React.FC<any> = (props) => {
  const { onClick, className, style } = props
  return (
    <div onClick={onClick} className={`${className} mood_next`} style={{ ...style }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const PrevArrow: React.FC<any> = (props) => {
  const { onClick, className, style } = props
  return (
    <div onClick={onClick} className={`${className} mood_prev`} style={{ ...style }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const MoodSliderItem: React.FC<IMoodSliderItem> = ({ image, title, text, id }) => (
  <div
    className="mx-auto w-4/5 md:w-4/5 lg:w-full flex flex-wrap justify-center max-w-fullhd"
    id={`mood-slider-item-${id}`}>
    <div className="lg:px-24 ">
      <ResponsiveImage image={image} usePlaceholder={false} />
    </div>
    <div className=" my-3 max-w-800px">
      <div className="text-left md:text-center">
        <span className="font-subtitleFont text-base uppercase">{title}</span>
      </div>
      <p className="mt-2 text-left md:text-center">{text}</p>
    </div>
  </div>
)

const MoodSlideShow: React.FC<IMoonSlideShowProps> = ({ kicker, title, items }) => {
  const setting = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <div className="lg:w-4/5 mx-auto lg:text-center max-w-fullhd mt-60px mb-120px lg:my-100px">
      <div className="px-4">
        <span className="font-subtitleFont text-base uppercase">{title}</span>
        <h2 className="mt-2 mb-4">{kicker}</h2>
      </div>
      <Slider settings={setting} className="w-full items-center">
        {items.map((item, index) => (
          <MoodSliderItem
            key={item.id}
            id={index}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </Slider>
    </div>
  )
}

export default MoodSlideShow
