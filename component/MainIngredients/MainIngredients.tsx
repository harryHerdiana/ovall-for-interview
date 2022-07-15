import React from 'react'

import GradientRectangle from '@component/GradientRectangle'
import { IngredientSectionProps } from '@lib/types'

import IngredientAccordion from './IngredientAccordion'

const MainIngredients: React.FC<IngredientSectionProps> = (props: IngredientSectionProps) => {
  const { backgroundColor, text, title, items } = props
  return (
    <GradientRectangle variantGradient={backgroundColor} contentPlacement="left">
      <div className="mx-auto flex flex-col items-center lg:mb-80px mt-12 lg:mt-80px pt-14 pb-6 lg:py-14">
        <div className="px-4 md:px-0 m-auto flex  flex-col max-w-content-sm md:w-3/4 xl:w-1/2  md:text-center  lg:items-center ">
          <div className="text-left md:text-center mb-4">
            <h2 className="mb-4">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
        <IngredientAccordion items={items} />
      </div>
    </GradientRectangle>
  )
}

export default MainIngredients
