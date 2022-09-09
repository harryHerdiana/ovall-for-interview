import React from 'react'
import { useRouter } from 'next/router'
import { ProductRating } from '@component/ProductReview'
import { toEuro } from '@lib/utils'
import { skuColorMap } from '@component/ProductStage/ProductStage'
import ResponsiveImage from '@component/ResponsiveImage'
import GradientSquare from '@component/GradientSquare'
import { PRODUCT_PATH, CLEANSER_PRODUCT_PATH } from '@lib/constants'
import { IProductVariantImage } from '@lib/types'
import { IShopifyProductVariant } from '@modules/shopify/types'

type IAllProductBannerProps = {
  allProducts: IShopifyProductVariant[]
  productImages: IProductVariantImage[]
}

const skuMap = {
  'Ovall-Blue': { title: 'Ovall™ 2 - Blue', link: `${PRODUCT_PATH}?variant=Ovall-Blue` },
  'Ovall-Pink': { title: 'Ovall™	2 - Pink', link: `${PRODUCT_PATH}?variant=Ovall-Pink` },
  'Ovall-Turquoise': { title: 'Ovall™	2 - Green', link: `${PRODUCT_PATH}?variant=Ovall-Turquoise` },
  'Ovall-Aloe-Cleanser': {
    title: 'Aloe Face Cleansing Gel',
    link: CLEANSER_PRODUCT_PATH,
    variant: 0
  }
}

const AllProductBanner: React.FC<IAllProductBannerProps> = ({ allProducts, productImages }) => {
  const router = useRouter()

  function getVariantImageBySku(sku: string) {
    const selectedImage = productImages.find((image) => image.color === skuColorMap[sku])
    return selectedImage.image
  }

  function getTitleBySku(sku: string) {
    return skuMap[sku].title
  }

  function redirectBySku(sku: string) {
    router.push(skuMap[sku]?.link)
  }

  return (
    <div className="lg:items-center lg:h-max max-w-site mx-auto mb-[80px] mt-[20px] lg:mt-[40px]">
      <div className="lg:flex grid grid-cols-2 items-start justify-center w-full lg:mt-0 gap-[20px] gap-y-[40px] lg:gap-[40px]">
        {allProducts.map((item) => (
          <div
            className="text-left  cursor-pointer"
            key={item.id}
            role="presentation"
            onClick={() => redirectBySku(item.sku)}>
            <GradientSquare variantGradient={item.sku}>
              <ResponsiveImage
                image={getVariantImageBySku(item.sku)}
                className="flex justify-start md:justify-center lg:justify-end h-max lg:w-full"
              />
            </GradientSquare>
            <div className="max-w-[175px] lg:pl-[30px] pl-[15px] mt-5">
              <div className="self-center lg:self-start font-titleFont  text-[18px]">
                {getTitleBySku(item.sku)}
              </div>
              <div className="mb-2 self-center lg:self-start" style={{ minHeight: '25px' }}>
                <ProductRating />
              </div>
              <span className="self-center lg:self-start font-titleFont text-[18px] ">
                {toEuro(item.priceV2.amount)}
              </span>
              <span className="line-through font-subTagFont block text-[15px] ">
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
