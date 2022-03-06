/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
  image: DatoCMSResponsiveImage
  title: string
  text: string
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
        width: 'max-content',
        top: '25%',
        transform: 'translateX(10px)'
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
        top: '25%',
        transform: 'translateY(20px) translateX(-10px) rotate(180deg)'
      }}>
      <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
    </div>
  )
}

const MoodSliderItem: React.FC<IMoodSliderItem> = ({ image, title, text }) => {
  const x = 2
  return (
    <div className="mx-auto w-3/5 md:w-4/5 lg:w-full flex flex-wrap justify-center">
      <div className="lg:px-24 ">
        <ResponsiveImage image={image} />
      </div>
      <div className="lg:w-4/5 my-3">
        <span className="font-subtitleFont text-base uppercase">{title}</span>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  )
}

const MoodSlideShow: React.FC<IMoonSlideShowProps> = ({ kicker, title, items }) => {
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      })
    } else {
      setSetting({})
    }
  }, [width])
  return (
    <div className="lg:w-4/5 mx-auto text-center my-12">
      <span className="font-subtitleFont text-base uppercase">{title}</span>
      <h2 className="mt-2 mb-4">{kicker}</h2>
      <Slider settings={setting} className="w-full items-center">
        {items.map((item) => (
          <MoodSliderItem key={item.id} image={item.image} title={item.title} text={item.text} />
        ))}
      </Slider>
    </div>
  )
}

export default MoodSlideShow
