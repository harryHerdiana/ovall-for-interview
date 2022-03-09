import React from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import { DesktopGradient, MobileGradient } from './GradientElements'

export type IGradientBannerProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
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
    <section className="flex lg:h-max flex-col lg:flex-row ">
      {mobileContentPlacement === 'top' && (
        <div className={`${mobileContentSolidColor && backgroundColor}_mobile_top`}>
          <MobileGradientAll />
        </div>
      )}
      <div
        className={`${backgroundColor}_solid_left ${
          contentPlacement === 'left' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-end justify-center`}>
        <DesktopGradientAll />
      </div>
      <GradientRectangle image={image} variantGradient={backgroundColor} className="w-full " />
      <div
        className={`${backgroundColor}_solid_right ${
          contentPlacement === 'right' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-start justify-center`}>
        <DesktopGradientAll />
      </div>
      {mobileContentPlacement === 'bottom' && (
        <div className={`${mobileContentSolidColor && backgroundColor}_mobile_bottom`}>
          <MobileGradientAll />
        </div>
      )}
    </section>
  )
}
export default GradientBanner
