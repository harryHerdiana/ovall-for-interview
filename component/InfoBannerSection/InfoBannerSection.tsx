import React from 'react'
import GradientRectangle from '@component/GradientRectangle'

import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'
import { IGradientBannerProps } from '@component/GradientBanner/GradientBanner'
import { DesktopGradient, MobileGradient } from './GradientElements'

const InfoBannerSection: React.FC<IGradientBannerProps> = (props: IGradientBannerProps) => {
  const {
    backgroundColor,
    image,
    title,
    body,
    buttonText,
    contentPlacement,
    mobileContentPlacement,
    items,
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
      buttonType="secondary"
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
      buttonType="secondary"
      onClickButton={onClickButton}>
      {children}
    </DesktopGradient>
  )
  return (
    <GradientRectangle
      contentPlacement="left"
      variantGradient={backgroundColor}
      className="block lg:h-max flex-col lg:flex-row max-w-screen lg:max-h-540px mx-auto ">
      <div className="flex lg:h-max flex-col lg:flex-row max-w-site m-auto">
        <div
          className={` ${
            contentPlacement === 'left' ? ' hidden lg:flex items-baseline ml-8' : 'hidden'
          } w-full flex-col items-end justify-center lg:my-4 xl:my-12`}>
          <DesktopGradientAll />
        </div>
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
          className={`${imageClassName} w-full justify-center items-end hidden lg:flex`}
        />
      </div>
      {mobileContentPlacement === 'bottom' && (
        <div className={`${mobileContentSolidColor && backgroundColor}_mobile_bottom -mt-0`}>
          <MobileGradientAll />
        </div>
      )}
    </GradientRectangle>
  )
}

export default InfoBannerSection
