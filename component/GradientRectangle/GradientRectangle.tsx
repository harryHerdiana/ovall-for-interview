import React from 'react'

interface IGradientRectangle {
  variantGradient: 'people' | 'blue' | 'green' | 'lotus-pink'
  className: string
}

const GradientRectangle: React.FC<IGradientRectangle> = ({ variantGradient, className }) => {
  let gradient = ''
  if (variantGradient === 'people') {
    gradient = 'people_gradient_rectangle'
  } else if (variantGradient === 'blue') {
    gradient = 'blue_gradient_rectangle'
  } else if (variantGradient === 'green') {
    gradient = 'green_gradient_rectangle'
  } else if (variantGradient === 'lotus-pink') {
    gradient = 'pink_gradient_rectangle'
  }
  return <div className={`${gradient} ${className}`} />
}

export default GradientRectangle
