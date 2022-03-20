import React from 'react'
import GradientRectangle from '@component/GradientRectangle'

import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'
import { IGradientBannerProps } from '@component/GradientBanner/GradientBanner'
import { DesktopGradient, MobileGradient } from './GradientElements'

const HeroSection: React.FC<IGradientBannerProps> = (props: IGradientBannerProps) => {
  const {
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
  } = props
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
      className="block lg:h-max flex-col lg:flex-row max-w-screen lg:max-h-540px mx-auto ">
      <div className="flex lg:h-max flex-col lg:flex-row max-w-site m-auto">
        <GradientSquare
          variantGradient={backgroundColor}
          className="lg:hidden h-full w-full max-h-full">
          <ResponsiveImage
            image={image}
            className={`${imageClassName} w-full h-full flex justify-start md:justify-center`}
          />
        </GradientSquare>
        <ResponsiveImage
          image={image}
          className={`${imageClassName} w-full h-full justify-center hidden lg:flex`}
        />
        <div
          className={` ${
            contentPlacement === 'right' ? ' hidden lg:flex items-end mr-8' : 'hidden'
          } w-full flex-col items-baseline justify-center`}>
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

export default HeroSection