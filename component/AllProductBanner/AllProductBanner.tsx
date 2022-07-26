import React from 'react'
import { ProductRating } from '@component/ProductReview'
import { toEuro } from '@lib/utils'
import { skuColorMap } from '@component/ProductStage/ProductStage'
import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'

type IAllProductBannerProps = {
  allProducts: any[]
  productImages: any[]
}

const skuTitleMap = {
  'Ovall-Blue': 'Ovall™ 2 - Blue',
  'Ovall-Pink': 'Ovall™	2 - Pink',
  'Ovall-Turquoise': 'Ovall™	2 - Green',
  'Ovall-Aloe-Cleanser': 'Aloe Face Cleansing Gel'
}

const AllProductBanner: React.FC<IAllProductBannerProps> = ({ allProducts, productImages }) => {
  const [newItems, setNewItems] = React.useState([])
  React.useEffect(() => {
    const temp = allProducts.reduce((prev, cur) => prev.variants.concat(cur.variants))
    setNewItems(temp)
  }, [])
  function getVariantImageBySku(sku: string) {
    const selectedImage = productImages.find((image) => image.color === skuColorMap[sku])
    return selectedImage.image
  }
  function getTitleBySky(sku: string) {
    return skuTitleMap[sku]
  }
  return (
    <div className="flex flex-col lg:items-center lg:h-max max-w-site mx-auto mb-[80px] mt-[20px] lg:mt-[40px]">
      <div className="lg:flex grid grid-cols-2 items-start justify-center w-full bg-white lg:bg-transparent lg:mt-0 gap-[20px] gap-y-[40px] lg:gap-[40px]">
        {newItems.map((item) => (
          <div className="text-left ">
            <GradientSquare variantGradient={item.sku}>
              <ResponsiveImage
                image={getVariantImageBySku(item.sku)}
                className="flex justify-start md:justify-center lg:justify-end h-max lg:w-full "
              />
            </GradientSquare>
            <div className="lg:max-w-[220px] lg:pl-[30px] pl-[25px] mt-5">
              <div className="self-center lg:self-start font-titleFont font-semibold text-md lg:text-xl">
                {getTitleBySky(item.sku)}
              </div>
              <div className="mt-1 mb-4 self-center lg:self-start" style={{ minHeight: '25px' }}>
                <ProductRating />
              </div>
              <span className="self-center lg:self-start font-subtitleFont font-semibold text-sm lg:text-xl">
                {toEuro(item.priceV2.amount)}
              </span>
              <span className="line-through font-bold font-subtitleFont block text-xs lg:text-sm">
                {item.compareAtPriceV2 && toEuro(item.compareAtPriceV2.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProductBanner
