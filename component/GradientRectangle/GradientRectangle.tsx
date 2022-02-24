import React from 'react'

interface IGradientRectangle {
  variantGradient: string
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
  } else if (variantGradient === 'pink') {
    gradient = 'pink_gradient_rectangle'
  }
  return (
    <div className={`${gradient} ${className} flex justify-center`}>
      <img src="/images/girl_placeholder.png" alt="placeholder" className="h-72 w-max self-end" />
    </div>
  )
}

export default GradientRectangle
