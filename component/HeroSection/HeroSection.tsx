import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientBanner from '@component/GradientBanner'

type IHeroSectionProps = {
  backgroundColor: string
  image?: DatoCMSResponsiveImage
  title?: string
  kicker?: string
  body?: string
  children?: React.ReactElement
}

const HeroSection: React.FC<IHeroSectionProps> = ({
  body,
  backgroundColor,
  kicker,
  title,
  image,
  children
}) => (
  <GradientBanner
    mobileContentPlacement="bottom"
    body=""
    contentPlacement="left"
    image={image}
    backgroundColor={backgroundColor}>
    <div className="flex flex-col gap-2 -mb-1 -mt-0">
      {title && <div className="h3_element">{title}</div>}
      <h2 className="my-0">{kicker || body}</h2>
      {children}
    </div>
  </GradientBanner>
)

export default HeroSection
