import React from 'react'

import { ReviewCarousel } from '@component/ProductReview'

interface IProps {
  kicker: string
  title: string
}

const TestimonialSection: React.FC<IProps> = ({ kicker, title }) => (
  <section className="lg:w-4/5 mx-auto lg:text-center my-16 lg:mb-80px max-w-site">
    <div className="px-4">
      {/* <span className="kicker">{kicker}</span>
      <h2 className="mt-2 mb-0">{title}</h2> */}
      <ReviewCarousel />
    </div>
  </section>
)

export default TestimonialSection
