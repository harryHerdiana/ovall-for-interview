import React from 'react'
import Image from 'next/image'

type IProps = {
  image: any
  className?: string
  height: number
  width: number
}

const PrefetchedImage: React.FC<IProps> = ({ className, image, ...props }) => {
  if (!image) {
    return null
  }
  return (
    <div className={`${className} `}>
      <Image src={image.src} {...props} priority objectFit="cover" layout="fill" />
    </div>
  )
}

export default PrefetchedImage
