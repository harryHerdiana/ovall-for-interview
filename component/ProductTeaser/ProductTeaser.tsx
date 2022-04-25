import React from 'react'
import { useRouter } from 'next/router'
import ResponsiveImage from '@component/ResponsiveImage'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientRectangle from '@component/GradientRectangle'
import GradientSquare from '@component/GradientSquare'
import { ProductRating } from '@component/ProductReview'
import { IShopifyProduct } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'
import Button from '@component/Button'
import { PRODUCT_PATH } from '@lib/constants'

type IProductTeaserProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  product: IShopifyProduct
  buttonText: string
  onClickButton?: () => void
  className?: string
}

const ProductTeaser: React.FC<IProductTeaserProps> = ({
  backgroundColor,
  image,
  title,
  product,
  buttonText,
  onClickButton,
  className
}) => {
  const router = useRouter()
  const defaultButtonAction = (): void => {
    router.push(PRODUCT_PATH)
  }
  return (
    <GradientRectangle
      contentPlacement="right"
      variantGradient={backgroundColor}
      className={className}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:h-max max-w-site mx-auto ">
        <GradientSquare className="lg:bg-none" variantGradient={backgroundColor}>
          <ResponsiveImage
            image={image}
            className="flex justify-start md:justify-center lg:justify-end h-max lg:w-full "
          />
        </GradientSquare>
        <div className="flex-col items-start h-max justify-center w-full pt-8 p-4 lg:p-0 bg-white lg:bg-transparent lg:mt-0">
          <div className="text-center lg:text-left block">
            <div className="self-center lg:self-start h2_element_normalcase">{title}</div>
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
                <li
                  className=" w-5 h-5 list-none rounded-full bg-Ovall-Pink-500"
                  aria-hidden="true"
                />
                <li
                  className=" w-5 h-5 list-none rounded-full bg-Ovall-Blue-500"
                  aria-hidden="true"
                />
                <li
                  className="w-5 h-5 list-none rounded-full bg-Ovall-Turquoise-500"
                  aria-hidden="true"
                />
              </ul>
            </div>
            <div className="lg:w-3/5">
              <Button
                onClick={onClickButton || defaultButtonAction}
                type="button"
                buttonType="primary"
                className="button-product-details">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </GradientRectangle>
  )
}

export default ProductTeaser
