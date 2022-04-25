import React from 'react'
import { IProductPage } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'
import { ProductRating } from '@component/ProductReview'
import ScrollableLink from '@component/ScrollableLink'
import VariantSelect from './VariantSelect'
import ProductClaimsSection from './ProductClaims'
import ProductSlideshow from './ProductSlideshow'

interface IProductStageProps extends IProductPage {
  variant: IShopifyProductVariant // derived from state (selected variant)
  activeSku: string
  setVariantSku: (sku: string) => void
  product: IShopifyProduct
}

export const getCheapestVariantPrice = (product: IShopifyProduct) => {
  const cheapest = product.variants.sort(
    (a, b) => Number(a.priceV2.amount) - Number(b.priceV2.amount)
  )[0]

  const afterPrice = cheapest.priceV2.amount
  const beforePrice = cheapest.compareAtPriceV2.amount
  return { price: afterPrice, before: beforePrice }
}

const ProductStage: React.FC<IProductStageProps> = ({
  product,
  variant,
  activeSku,
  setVariantSku,
  stageSection: {
    addToCartLabel,
    quantityCaption,
    productClaims,
    colorCaption,
    deliveryTime,
    freeShippingCaption,
    slideshowImages,
    variantImages,
    soldoutLabel,
    discountLabel
  }
}) => {
  const skuColorMap = {
    'Ovall-Blue': 'blue',
    'Ovall-Pink': 'rose',
    'Ovall-Turquoise': 'green'
  }
  function getVariantImageBySku(sku: string) {
    return variantImages.find((image) => image.color === skuColorMap[sku])
  }
  return (
    <section className="grid grid-cols-1 lg:gap-4 lg:grid-cols-2 max-w-site mx-auto mb-0">
      <div className="text-center md:text-left mx-auto md:pr-0 flex flex-wrap self-start justify-center w-full ">
        <div className="relative h-full w-full lg:px-8">
          <ProductSlideshow
            activeSku={activeSku}
            items={slideshowImages}
            variantItem={getVariantImageBySku(activeSku)}
          />
          {variant.quantityAvailable < 1 && (
            <div className="py-1 px-4 absolute top-4 lg:top-8 lg:right-8 right-0 text-base font-subtitleFont uppercase text-white bg-purple_soldout w-2/3 lg:w-2/5">
              {soldoutLabel}
            </div>
          )}
        </div>
      </div>
      <div className="text-center lg:text-left text-black  flex flex-col flex-wrap mx-auto p-4 mt-4 lg:p-0  lg:pt-5 lg:pr-8 site:pr-0">
        <div className="w-full text-left mb-1 h2_element_normalcase">{product.title}</div>
        <div className="mt-1 self-start" style={{ minHeight: '25px' }}>
          <ScrollableLink anchor="testimonial" className="no-underline text-black">
            <ProductRating />
          </ScrollableLink>
        </div>
        <div className="text-left flex flex-row mb-3 mt-5">
          <span className=" self-end font-subtitleFont font-semibold text-2xl">
            {toEuro(variant.priceV2.amount)}
          </span>
          <div className="ml-8 md:ml-10 mb-3px ">
            <div className="font-bold text-greenLink text-tiny md:text-tiny font-subtitleFont -mb-1.5 lg:-mb-1.5">
              {discountLabel}
            </div>
            <span className="line-through font-bold text-sm font-subtitleFont">
              {toEuro(variant.compareAtPriceV2.amount)}
            </span>
          </div>
        </div>
        <VariantSelect
          addToCartLabel={addToCartLabel}
          variant={variant}
          colorCaption={colorCaption}
          setVariantSku={setVariantSku}
          activeSku={activeSku}
          variants={product.variants}
          quantityCaption={quantityCaption}
          soldoutLabel={soldoutLabel}
        />

        <div className="flex justify-between mt-4">
          <span className="w-32 md:w-max text-left font-textFont">{deliveryTime}</span>
          <span className="text-greenLink font-textFont mr-2">{freeShippingCaption}</span>
        </div>
        <ProductClaimsSection productClaims={productClaims} />
      </div>
    </section>
  )
}
export default ProductStage
