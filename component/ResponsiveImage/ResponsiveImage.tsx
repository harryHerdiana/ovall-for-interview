import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { Image } from 'react-datocms'

type IResponsiveImageProps = {
  image: DatoCMSResponsiveImage
  usePlaceholder?: boolean
  className?: string
  lazyLoad?: boolean
}

const ResponsiveImage: React.FC<IResponsiveImageProps> = ({ className, image, ...props }) => {
  if (!image) {
    return null
  }
  return (
    <div className={`${className} `}>
      <Image data={image} {...props} />
    </div>
  )
}

export default ResponsiveImage
