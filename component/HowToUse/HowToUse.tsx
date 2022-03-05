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

const HowToUse: React.FC<IHowToUseProps> = ({ title, items }) => (
  <div className=" md:w-4/5 mx-auto my-10">
    <h2 className="px-4 mb-7 lg:mb-10 text-left w-2/3 lg:px-0 lg:w-full lg:text-center">{title}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col">
          <div className="h-max ">
            <ResponsiveImage image={item.image} />
          </div>
          <div className="my-4 px-4">
            <div className="text-base uppercase font-subtitleFont">{item.title}</div>
            <div className="text-tiny font-textFont">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default HowToUse
