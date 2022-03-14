import Script from 'next/script'
import React from 'react'

export const ProductRating: React.FC<Record<string, never>> = () => (
  <>
    <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
    <div className="loox-rating" data-fetch data-id="6600332345552" />
  </>
)

export default ProductRating
