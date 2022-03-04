import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'
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
  violet: 'violet_gradient_rectangle',
  'lotus-pink': 'pink_gradient_rectangle'
}
const GradientRectangle: React.FC<IGradientRectangle> = ({ variantGradient, className, image }) => {
  const gradient = gradientMap[variantGradient]

  return (
    <div className={`${gradient} ${className} flex justify-center`}>
      <ResponsiveImage image={image} />
    </div>
  )
}

export default GradientRectangle
