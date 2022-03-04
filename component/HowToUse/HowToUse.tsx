import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import ResponsiveImage from '@component/ResponsiveImage'

type IHowToUseProps = {
  title: string
  items: {
    id: string
    title: string
    image: DatoCMSResponsiveImage
    description: string
  }[]
}

const HowToUse: React.FC<IHowToUseProps> = ({ title, items }) => {
  console.log(items)
  return (
    <div className="md:w-4/5 mx-auto">
      <h2>{title}</h2>
      <div className="flex flex-col md:flex-row">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="h-80">
              <ResponsiveImage image={item.image} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowToUse
