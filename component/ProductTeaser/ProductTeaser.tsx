import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { toEuro } from '@lib/utils'
import { ProductRating } from '@component/ProductReview'
import { useRouter } from 'next/router'
import { PRODUCT_PATH } from '@lib/constants'
import { IShopifyProduct } from '@modules/shopify/types'
import GradientBanner from '@component/GradientBanner'
import Button from '@component/Button'

type IProductTeaserProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  buttonText: string
  title: string
  product: IShopifyProduct
  className?: string
}

const ProductTeaser: React.FC<IProductTeaserProps> = ({
  backgroundColor,
  buttonText,
  title,
  image,
  product,
  className
}) => {
  const router = useRouter()
  return (
    <GradientBanner
      className={className ? `${className}` : ''}
      mobileContentPlacement="bottom"
      contentPlacement="right"
      backgroundColor={backgroundColor}
      buttonText={buttonText}
      image={image}
      buttonType="hidden"
      onClickButton={() => router.push(PRODUCT_PATH)}>
      <div className="text-center lg:text-left block">
        <div className="self-center lg:self-start font-titleFont text-2xl">{title}</div>
        <div className=" mb-8 self-center lg:self-start" style={{ minHeight: '25px' }}>
          <ProductRating />
        </div>
        <span className="self-center lg:self-start font-subtitleFont font-semibold text-2xl">
          {toEuro(product.variants[0].priceV2.amount)}
        </span>
        <div className="self-center lg:self-start">
          <span className="line-through font-bold font-subtitleFont">
            {toEuro(product.variants[0].compareAtPriceV2.amount)}
          </span>
        </div>
        <div className="my-8 flex justify-center lg:justify-start">
          <ul className="flex gap-2">
            <li className=" w-5 h-5 list-none rounded-full bg-Ovall-Pink-500" aria-hidden="true" />
            <li className=" w-5 h-5 list-none rounded-full bg-Ovall-Blue-500" aria-hidden="true" />
            <li
              className="w-5 h-5 list-none rounded-full bg-Ovall-Turquoise-500"
              aria-hidden="true"
            />
          </ul>
        </div>
        <div className="lg:w-3/5">
          <Button
            onClick={() => router.push(PRODUCT_PATH)}
            type="button"
            buttonType="primary"
            className="button-product-details">
            {buttonText}
          </Button>
        </div>
      </div>
    </GradientBanner>
  )
}

export default ProductTeaser
