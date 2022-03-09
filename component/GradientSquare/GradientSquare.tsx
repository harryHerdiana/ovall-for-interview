import React from 'react'
import ResponsiveImage from '@component/ResponsiveImage'

interface IGradientSquare {
  variantGradient: string
  className: string
  children: React.ReactElement
}

const gradientMap = {
  blue: 'blue_gradient_rectangle',
  green: 'green_gradient_rectangle',
  'lotus-pink': 'pink_gradient_rectangle'
}

const GradientSquare: React.FC<IGradientSquare> = ({ variantGradient, className, children }) => {
  const gradient = gradientMap[variantGradient]
  return (
    <div className={`${gradient} ${className} flex justify-center square_gradient`}>{children}</div>
  )
}

export default GradientSquare
