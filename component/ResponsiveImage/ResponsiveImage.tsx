import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { Image } from 'react-datocms'

type IResponsiveImageProps = {
  image: DatoCMSResponsiveImage
  usePlaceholder?: boolean
}

const ResponsiveImage: React.FC<IResponsiveImageProps> = ({ image, ...props }) => {
  if (!image) {
    return null
  }
  return (
    <div className="h-max">
      <Image data={image} {...props} />
    </div>
  )
}

export default ResponsiveImage
