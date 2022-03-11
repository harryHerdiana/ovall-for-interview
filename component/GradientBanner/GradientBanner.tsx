import React from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import ResponsiveImage from '@component/ResponsiveImage'
import { DesktopGradient, MobileGradient } from './GradientElements'
import GradientSquare from '@component/GradientSquare'

export type IGradientBannerProps = {
  backgroundColor: string
  image?: DatoCMSResponsiveImage
  title: string
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
  mobileContentSolidColor
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
      className="flex lg:h-max flex-col lg:max-h-96 lg:flex-row max-w-fullhd m-auto">
      {mobileContentPlacement === 'top' && (
        <div className={`${mobileContentSolidColor && backgroundColor}_mobile_top`}>
          <MobileGradientAll />
        </div>
      )}
      <div
        className={`${backgroundColor}_solid_lefts ${
          contentPlacement === 'left' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-end justify-center`}>
        <DesktopGradientAll />
      </div>
      <GradientSquare
        variantGradient={backgroundColor}
        className="lg:hidden h-full w-full max-h-96">
        <ResponsiveImage image={image} className=" w-full h-full flex justify-center" />
      </GradientSquare>
      <ResponsiveImage
        image={image}
        className=" w-full h-full justify-center hidden lg:flex max-h-96"
      />
      <div
        className={`${backgroundColor}_solid_rights ${
          contentPlacement === 'right' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-start justify-center`}>
        <DesktopGradientAll />
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
