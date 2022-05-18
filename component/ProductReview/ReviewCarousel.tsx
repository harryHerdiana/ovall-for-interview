import Script from 'next/script'
import React from 'react'

interface IProps {
  kicker?: string
  title?: string
}

export const ReviewCarousel: React.FC<IProps> = ({ kicker, title }) => (
  <div className=" mx-auto lg:text-center my-16 lg:mb-80px ">
    <div className="mx-auto lg:text-center px-4">
      <span className="kicker">{kicker}</span>
      <h2 className="mt-2 mb-0">{title}</h2>
    </div>
    <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
    <div id="looxCarousel" data-show-more="true" />
  </div>
)

export default ReviewCarousel
