import React from 'react'

import InstagramFeed from '@component/InstagramFeed'

interface IProps {
  title: string
  subtitle: string
  images: any[]
}

const TestimonialSection: React.FC<IProps> = ({ title, subtitle, images }) => (
  <div className="lg:w-4/5 mx-auto lg:text-center my-14 max-w-fullhd">
    <div>{subtitle}</div>
    <h2>{title}</h2>
    <InstagramFeed images={images} />
  </div>
)

export default TestimonialSection
