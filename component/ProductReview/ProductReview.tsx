import Script from 'next/script'
import React from 'react'

const ProductReview: React.FC<Record<string, never>> = () => (
  <div className="max-w-site">
    <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
    <div id="looxReviews" data-product-id="6600332345552" />
  </div>
)

export default ProductReview
