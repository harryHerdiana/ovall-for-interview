/* eslint-disable prettier/prettier */
import React from 'react'

interface IGradientRectangle {
  variantGradient: string
  className: string
  image: string
}

const gradientMap = {
  people: 'people_gradient_rectangle',
  blue: 'blue_gradient_rectangle',
  green: 'green_gradient_rectangle',
  pink: 'pink_gradient_rectangle'
}
const GradientRectangle: React.FC<IGradientRectangle> = ({ variantGradient, className, image }) => {
  const gradient = gradientMap[variantGradient]
  return (
    <div className={`${gradient} ${className} flex justify-center`}>
      {/* <img src={`${image}`} alt="placeholder" className="h-72 w-max self-end" /> */}
      <img src="/images/girl_placeholder.png" alt="placeholder" className="h-72 w-max self-end" />
    </div>
  )
}

export default GradientRectangle
