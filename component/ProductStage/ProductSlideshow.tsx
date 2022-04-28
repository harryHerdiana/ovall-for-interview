/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Transition } from '@headlessui/react'
import ResponsiveImage from '@component/ResponsiveImage'
import Slider from '@component/Slider'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientSquare from '@component/GradientSquare'
import Icon from '@component/Icon'

interface IProductSlideshow {
  variantItem: Record<string, any>
  items: Record<string, any>[]
  activeSku: string
}

const NextArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={`${className} slideshow_next`}
      style={{
        ...style
      }}>
      <div>
        <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
      </div>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick, className, style } = props
  return (
    <div
      onClick={onClick}
      className={`${className} slideshow_prev`}
      style={{
        ...style
      }}>
      <div>
        <Icon src="/images/arrow-small.svg" className="h-10 w-10" />
      </div>
    </div>
  )
}

interface ISliderItem {
  image: DatoCMSResponsiveImage
}

const SliderItem: React.FC<ISliderItem> = ({ image }) => (
  <div className="overflow-hidden flex flex-wrap justify-center h-max w-max">
    <ResponsiveImage image={image} usePlaceholder={false} />
  </div>
)

interface IImageDescription {
  descriptionLabel: string
  descriptionText: string
}

const ImageDescription: React.FC<IImageDescription> = ({ descriptionLabel, descriptionText }) => {
  const [isOpen, setIsopen] = useState<boolean>(false)
  return (
    <div
      className={classNames(
        !isOpen && 'translate-y-2/3',
        'lg:min-h-190px max-h-150px lg:max-h-190px min-h-150px transition transform ease-in-out duration-500 delay-150 absolute bottom-0 w-full lg:w-full green_70 overflow-hidden px-4'
      )}>
      <div className="items-start flex flex-col">
        <div
          className="flex w-full lg:w-full items-center justify-between cursor-pointer "
          onClick={() => setIsopen(!isOpen)}>
          <h3 className="text-left py-4 lg:py-6">{descriptionLabel}</h3>
          <div className="relative">
            <Transition
              as="div"
              className="absolute -top-4 -left-10"
              show={isOpen}
              enter=" transition-opacity ease-in-out duration-500 delay-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" transition-opacity ease-in-out duration-500 delay-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <img
                alt="closeIcon"
                src="/images/close.svg"
                className={`h-8 w-8  
                `}
              />
            </Transition>
            <Transition
              as="div"
              className="absolute -top-4 -left-9"
              show={!isOpen}
              enter=" transition-opacity ease-in-out duration-500 delay-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" transition-opacity ease-in-out duration-500 delay-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <img
                alt="infoIcon"
                className={`h-7 w-7 border border-black rounded-full `}
                src="/images/info.svg"
              />
            </Transition>
          </div>
        </div>
        <p className="w-full lg:w-400px xl:w-full text-left mb-6 max-h-70px md:max-h-full overflow-scroll md:overflow-hidden">
          {descriptionText}
        </p>
      </div>
    </div>
  )
}

const ProductSlideshow: React.FC<IProductSlideshow> = ({ items, variantItem, activeSku }) => {
  const [allItems, setAllItems] = useState([])
  useEffect(() => {
    setAllItems([variantItem].concat(items))
  }, [variantItem])
  const setting = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <Slider name={activeSku} settings={setting} className="w-full items-center h-max">
      {allItems.map((item) => (
        <GradientSquare
          key={item.id}
          variantGradient={item.background}
          className="relative m-auto ">
          <SliderItem image={item.image} key={item.id} />
          {item.descriptionText && (
            <ImageDescription
              descriptionLabel={item.descriptionLabel}
              descriptionText={item.descriptionText}
            />
          )}
        </GradientSquare>
      ))}
    </Slider>
  )
}

export default ProductSlideshow
