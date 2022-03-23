import React from 'react'
import Icon from '@component/Icon'
import { StructuredTextDocument, StructuredText } from 'react-datocms'

type IProps = {
  items?: {
    id: string
    icon: string
    title: string
    text: StructuredTextDocument
  }[]
}

const BannerFeatures: React.FC<IProps> = ({ items }) => (
  <div className="mt-4">
    {items.map((item) => (
      <div key={item.id} className="flex">
        <Icon src={`/images/${item.icon}.svg`} className="h-12 w-12" />
        <div className="ml-4 mb-7">
          <h3 className="mb-4">{item.title}</h3>
          <StructuredText data={item.text} />
        </div>
      </div>
    ))}
  </div>
)

export default BannerFeatures
