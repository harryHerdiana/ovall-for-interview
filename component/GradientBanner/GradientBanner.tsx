import React from 'react'
import Icon from '@component/Icon'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import { StructuredText } from 'react-datocms'
import Button from '@component/Button'

type IGradientBannerProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
  buttonText: string
  dropDownText: StructuredTextDocument

  contentPlacement: 'left' | 'right'
}

const GradientBanner: React.FC<IGradientBannerProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  contentPlacement
}) => {
  console.log(buttonText)
  return (
    <section className="flex md:h-80 flex-col md:flex-row ">
      <div
        className={`${backgroundColor}_solid_left ${
          contentPlacement === 'left' ? ' hidden md:flex' : 'hidden'
        } w-full flex-col items-end justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <h3 className="font-bold text-lg font-titleFont">{title}</h3>
          <p className="font-textFont text-xs my-4">{body}</p>
          <Button type="button" buttonType="secondary">
            {buttonText}
          </Button>
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
      <GradientRectangle
        image={`${image}`}
        variantGradient={backgroundColor}
        className="w-full md:w-full"
      />
      <div
        className={`${backgroundColor}_solid_right ${
          contentPlacement === 'right' ? ' hidden md:flex' : 'hidden'
        } w-full flex-col items-start justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <h3 className="font-bold text-lg font-titleFont">{title}</h3>
          <p className="font-textFont text-xs my-4">{body}</p>
          <Button type="button" buttonType="secondary">
            {buttonText}
          </Button>
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
      <div className="md:hidden flex-col items-start h-max justify-center w-full p-5">
        <div className="flex flex-col ">
          <h3 className="font-bold text-lg font-titleFont">{title}</h3>
          <p className="font-textFont text-xs my-4">{body}</p>
          <Button type="button" buttonType="secondary">
            {buttonText}
          </Button>
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
    </section>
  )
}
export default GradientBanner
