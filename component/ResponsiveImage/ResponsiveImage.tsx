import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { Image } from 'react-datocms'

type IResponsiveImageProps = {
  image: DatoCMSResponsiveImage
}

const ResponsiveImage: React.FC<IResponsiveImageProps> = ({ image }) => {
  if (!image) {
    return null
  }
  return <Image data={image} />
}

export default ResponsiveImage
