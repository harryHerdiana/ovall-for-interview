import React from 'react'
import classnames from 'classnames'

interface IGradientRectangle {
  variantGradient: string
  className?: string
  children: React.ReactElement[] | React.ReactElement
  contentPlacement: 'left' | 'right'
}

const gradientMap = {
  people: 'people_gradient_rectangle',
  blue: 'blue_gradient_rectangle',
  green: 'green_gradient_rectangle',
  pink: 'pink_gradient_rectangle',
  violet: 'violet_gradient_rectangle',
  'lotus-pink': 'pink_gradient_rectangle'
}
const GradientRectangle: React.FC<IGradientRectangle> = ({
  variantGradient,
  className,
  children,
  contentPlacement
}) => {
  const gradient = `${gradientMap[variantGradient]}_${contentPlacement}`

  return <section className={classnames(className, `${gradient}`)}>{children}</section>
}

export default GradientRectangle
