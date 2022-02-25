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
  contentPlacement,
  dropDownText
}) => {
  console.log(backgroundColor)
  return (
    <div className="flex h-80">
      <div
        className={`${backgroundColor}_solid_left ${
          contentPlacement === 'left' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-end justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm my-4">{body}</div>
          <div className="uppercase text-sm flex items-center gap-6">
            {buttonText}
            <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <GradientRectangle image={`${image}`} variantGradient={backgroundColor} className="w-1/2" />
      <div
        className={`${backgroundColor}_solid_right ${
          contentPlacement === 'right' ? 'flex' : 'hidden'
        } w-1/2 flex-col items-start justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <h3 className="font-bold font-title">{title}</h3>
          <p className="font-workSansLight text-xs my-4">{body}</p>
          <Button buttonType="secondary">{buttonText}</Button>
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
    </div>
  )
}
export default GradientBanner
