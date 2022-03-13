import React from 'react'

interface IGradientSquare {
  variantGradient: string
  className?: string
  children: React.ReactElement
}

const gradientMap = {
  people: 'people_gradient_rectangle',
  blue: 'blue_gradient_rectangle',
  green: 'green_gradient_rectangle',
  pink: 'pink_gradient_rectangle',
  violet: 'violet_gradient_rectangle',
  'lotus-pink': 'pink_gradient_rectangle',
  'Ovall-Turquoise': 'green_gradient_rectangle',
  'Ovall-Blue': 'blue_gradient_rectangle',
  'Ovall-Pink': 'pink_gradient_rectangle'
}

const GradientSquare: React.FC<IGradientSquare> = ({ variantGradient, className, children }) => {
  const gradient = gradientMap[variantGradient]
  return (
    <div className={`${gradient} ${className} flex justify-center square_gradient`}>{children}</div>
  )
}

export default GradientSquare
