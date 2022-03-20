import React from 'react'

import { ReviewCarousel } from '@component/ProductReview'

interface IProps {
  kicker: string
  title: string
}

const TestimonialSection: React.FC<IProps> = ({ kicker, title }) => (
  <div className="lg:w-4/5 mx-auto lg:text-center my-14 max-w-fullhd">
    <div className="px-4">
      <span className="font-subtitleFont text-base uppercase">{kicker}</span>
      <h2 className="mt-2 mb-0">{title}</h2>
      <ReviewCarousel />
    </div>
  </div>
)

export default TestimonialSection
