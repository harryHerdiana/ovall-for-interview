import React from 'react'
import Icon from '@component/Icon'
interface IGradientBanner {
  variant: string
}

const GradientBanner: React.FC<IGradientBanner> = ({ variant }) => {
  let solid = ''
  let gradient = ''
  if (variant === 'people') {
    solid = 'people_solid'
    gradient = 'people_gradient'
  }
  return (
    <div className="flex h-64">
      <div className={`${solid} w-1/2 flex flex-col items-end justify-center`}>
        <div className="flex flex-col w-3/4 ">
          <div className="font-bold text-lg">Title Here</div>
          <div className="text-sm my-4">Content Here</div>
          <div className="uppercase text-sm flex items-center gap-6">
            Button Here <Icon src="/images/arrow-small.svg" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className={`${gradient} w-1/2`} />
    </div>
  )
}

export default GradientBanner
