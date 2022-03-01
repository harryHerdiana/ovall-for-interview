/* eslint-disable prettier/prettier */
import React from 'react'
import { Image } from 'react-datocms'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

interface IGradientRectangle {
  variantGradient: string
  className: string
  image: DatoCMSResponsiveImage
}

const gradientMap = {
  people: 'people_gradient_rectangle',
  blue: 'blue_gradient_rectangle',
  green: 'green_gradient_rectangle',
  pink: 'pink_gradient_rectangle',
  violet: 'violet_gradient_rectangle'
}
const GradientRectangle: React.FC<IGradientRectangle> = ({ variantGradient, className, image }) => {
  const gradient = gradientMap[variantGradient]

  return (
    <div className={`${gradient} ${className} flex justify-center`}>
      <Image data={image} />
      {/* <img src={`${image}`} alt={image} className="h-72 w-max self-end" /> */}
      <img src="/images/girl_placeholder.png" alt="placeholder" className="h-72 w-max self-end" />
    </div>
  )
}

export default GradientRectangle
