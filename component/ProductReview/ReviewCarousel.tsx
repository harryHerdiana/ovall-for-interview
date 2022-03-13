import Script from 'next/script'
import React from 'react'

export const ReviewCarousel: React.FC<Record<string, never>> = () => (
  <div className="max-w-site ml-auto mr-auto">
    <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
    <div id="looxCarousel" data-show-more="true" />
  </div>
)

export default ReviewCarousel
