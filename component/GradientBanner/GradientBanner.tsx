import React from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'
import { DesktopGradient, MobileGradient } from './GradientElements'

export type IGradientBannerProps = {
  backgroundColor: string
  image?: DatoCMSResponsiveImage
  title?: string
  body?: string
  items?: {
    id: string
    icon: string
    title: string
    text: StructuredTextDocument
  }[]
  buttonText?: string
  buttonType?: 'primary' | 'secondary'
  dropDownText?: StructuredTextDocument
  mobileContentPlacement: 'top' | 'bottom'
  mobileContentSolidColor?: boolean
  contentPlacement: 'left' | 'right'
  onClickButton?: () => void
  children?: React.ReactElement
  imageClassName?: string
}

const GradientBanner: React.FC<IGradientBannerProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  contentPlacement,
  mobileContentPlacement,
  items,
  buttonType,
  onClickButton,
  children,
  mobileContentSolidColor,
  imageClassName
}) => {
  const MobileGradientAll = () => (
    <MobileGradient
      title={title}
      body={body}
      items={items}
      buttonText={buttonText}
      buttonType={buttonType}
      onClickButton={onClickButton}>
      {children}
    </MobileGradient>
  )
  const DesktopGradientAll = () => (
    <DesktopGradient
      title={title}
      body={body}
      items={items}
      buttonText={buttonText}
      buttonType={buttonType}
      onClickButton={onClickButton}>
      {children}
    </DesktopGradient>
  )

  return (
    <GradientRectangle
      contentPlacement={contentPlacement}
      variantGradient={backgroundColor}
      className="block lg:h-max flex-col lg:flex-row max-w-screen lg:max-h-400px m-auto">
      <div className="flex lg:h-max flex-col lg:flex-row max-w-site min-h-400px m-auto">
        {mobileContentPlacement === 'top' && (
          <div className={`${mobileContentSolidColor && backgroundColor}_mobile_top`}>
            <MobileGradientAll />
          </div>
        )}
        <div
          className={` ${
            contentPlacement === 'left' ? ' hidden lg:flex' : 'hidden'
          } w-full flex-col items-end justify-center`}>
          <DesktopGradientAll />
        </div>
        <GradientSquare
          variantGradient={backgroundColor}
          className="lg:hidden h-full w-full max-h-full">
          <ResponsiveImage
            image={image}
            className={`${imageClassName} w-full h-full flex justify-center`}
          />
        </GradientSquare>
        <ResponsiveImage
          image={image}
          className={`${imageClassName} w-full h-full justify-center hidden lg:flex`}
        />
        <div
          className={` ${
            contentPlacement === 'right' ? ' hidden lg:flex' : 'hidden'
          } w-full flex-col items-start justify-center`}>
          <DesktopGradientAll />
        </div>
      </div>
      {mobileContentPlacement === 'bottom' && (
        <div className={`${mobileContentSolidColor && backgroundColor}_mobile_bottom`}>
          <MobileGradientAll />
        </div>
      )}
    </GradientRectangle>
  )
}
export default GradientBanner
