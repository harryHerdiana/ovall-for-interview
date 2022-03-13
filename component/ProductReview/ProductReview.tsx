import Script from 'next/script'
import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

const ProductReview: React.FC<any> = () => {
  console.log('Reviews script ru')
  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.async = true
  //   script.id = 'averageRating'
  //   script.innerHTML = `
  //     function loadScript() {
  //       var summaryBadge = new productStickerSummary();
  //       summaryBadge.showSummary({
  //         tsid: '${process.env.NEXT_PUBLIC_TRUSTED_SHOPS_ID}',
  //         sku: ['${product.sku}'],
  //         'element': '#script-test',
  //         'starColor' : '#000000',
  //         'starSize' : '16px',
  //         'fontSize' : '13px',
  //         'showRating' : 'false' ,
  //         'scrollToReviews' : 'false' ,
  //         'enablePlaceholder' : 'false'
  //       });
  //     };

  //     function run() {
  //       if (typeof productStickerSummary !== 'undefined') {
  //         loadScript()
  //       } else {
  //         setTimeout(run, 1000)
  //       }
  //     }

  //     run()
  //   `

  //   document.body.appendChild(script)
  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // })

  return (
    <>
      <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />

      <div id="looxReviews" data-product-id="6600332345552" />
    </>
  )
}

export default ProductReview
