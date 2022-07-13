import React from 'react'

import Accordion from '@component/Accordion'
import GradientRectangle from '@component/GradientRectangle'
import { IngredientSectionProps } from '@lib/types'

const MainIngredients: React.FC<IngredientSectionProps> = (props: IngredientSectionProps) => {
  const { backgroundColor, text, title, items } = props
  return (
    <GradientRectangle variantGradient={backgroundColor} contentPlacement="left">
      <div className="px-4 py-20 md:px-0 m-auto flex mb-100px lg:mb-80px flex-col max-w-content-sm md:w-3/4 xl:w-1/2  md:text-center  lg:items-center mt-12 lg:mt-80px">
        <div className="text-center mb-10">
          <h2 className="mb-4">{title}</h2>
          <p>{text}</p>
        </div>
        <Accordion items={items} blackLine />
      </div>
    </GradientRectangle>
  )
}

export default MainIngredients
