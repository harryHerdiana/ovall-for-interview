import React from 'react'
import GradientRectangle from '@component/GradientRectangle'

import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'
import { IGradientBannerProps } from '@component/GradientBanner/GradientBanner'
import { DesktopGradient, MobileGradient } from '@component/GradientBanner/GradientElements'

const InfoBannerSection: React.FC<IGradientBannerProps> = (props: IGradientBannerProps) => {
  const {
    backgroundColor,
    image,
    title,
    body,
    buttonText,
    contentPlacement,
    items,
    onClickButton,
    children,
    imageClassName,
    className
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
      contentPlacement={contentPlacement}
      variantGradient={backgroundColor}
      className={
        className
          ? `${className} block lg:h-max flex-col lg:flex-row max-w-screen lg:max-h-540px mx-auto`
          : 'block lg:h-max flex-col lg:flex-row max-w-screen lg:max-h-540px mx-auto'
      }>
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
        <div
          className={` ${
            contentPlacement === 'right' ? ' hidden lg:flex items-baseline ml-8' : 'hidden'
          } w-full flex-col items-end justify-center lg:my-4 xl:my-12`}>
          <DesktopGradientAll />
        </div>
      </div>
      <div className="mb-60px lg:mb-0">
        <MobileGradientAll />
      </div>
    </GradientRectangle>
  )
}

export default InfoBannerSection
