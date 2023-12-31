import React from 'react'
import { ICleanserPage } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'
import { ProductRating } from '@component/ProductReview'
import ScrollableLink from '@component/ScrollableLink'
import VariantSelect from './VariantSelect'
import ProductSlideshow from './ProductSlideshow'
import ProductDetails from './ProductDetails'
import { skuColorMap } from './ProductStage'

export interface IProductStageCleanserProps extends ICleanserPage {
  variant: IShopifyProductVariant // derived from state (selected variant)
  activeSku: string
  productCleanser: IShopifyProduct
}

const CleanserStage: React.FC<IProductStageCleanserProps> = ({
  productCleanser,
  variant,
  activeSku,
  stageSection: {
    addToCartLabel,
    quantityCaption,
    colorCaption,
    deliveryTime,
    freeShippingCaption,
    slideshowImages,
    soldoutLabel,
    discountLabel,
    productDetails,
    variantImages,
    productDescription,
    productVolume
  }
}) => {
  function getVariantImageBySku(sku: string) {
    return variantImages.find((image) => image.color === skuColorMap[sku])
  }

  return (
    <section className="grid grid-cols-1 lg:gap-4 lg:grid-cols-2 max-w-site mx-auto mb-0">
      <div className="text-center md:text-left mx-auto md:pr-0 flex flex-wrap self-start justify-center w-full ">
        <div className="relative h-full w-full lg:px-8">
          {activeSku && (
            <ProductSlideshow
              activeSku={activeSku}
              items={slideshowImages}
              variantItem={getVariantImageBySku(activeSku)}
            />
          )}
          {variant.quantityAvailable < 1 && (
            <div className="py-1 px-4 absolute top-4 lg:top-8 lg:right-8 right-0 text-base font-subtitleFont uppercase text-white bg-purple_soldout w-2/3 lg:w-2/5">
              {soldoutLabel}
            </div>
          )}
        </div>
      </div>
      <div className="text-center lg:text-left text-black  flex flex-col flex-wrap mx-auto p-4 mt-12 lg:mt-4 lg:p-0  lg:pt-5 lg:pr-8 site:pr-0">
        <div className="w-full text-left mb-1 h2_element_normalcase">{productCleanser.title}</div>
        <div className="mt-1 self-start mb-5" style={{ minHeight: '25px' }}>
          <ScrollableLink anchor="testimonial" className="no-underline text-black">
            <ProductRating />
          </ScrollableLink>
        </div>
        {productDescription && <p className="text-left ">{productDescription}</p>}
        {productVolume && <p className=" text-left">{productVolume}</p>}
        <div className="text-left flex flex-row mb-3 mt-5">
          <span className=" self-end font-subtitleFont font-semibold text-2xl">
            {toEuro(variant.priceV2.amount)}
          </span>
          <div className="ml-8 md:ml-10 mb-3px ">
            <div className="font-bold text-greenLink text-tiny md:text-tiny font-subtitleFont -mb-1.5 lg:-mb-1.5">
              {discountLabel}
            </div>
            {variant.compareAtPriceV2 && (
              <span className="line-through font-bold text-sm font-subtitleFont">
                {toEuro(variant.compareAtPriceV2.amount)}
              </span>
            )}
          </div>
        </div>
        <VariantSelect
          addToCartLabel={addToCartLabel}
          variant={variant}
          colorCaption={colorCaption}
          activeSku={activeSku}
          variants={productCleanser.variants}
          quantityCaption={quantityCaption}
          soldoutLabel={soldoutLabel}
        />

        <div className="flex justify-between mt-4">
          <span className="w-32 md:w-max text-left font-textFont">{deliveryTime}</span>
          <span className="text-greenLink font-textFont mr-2">{freeShippingCaption}</span>
        </div>
        {productDetails && <ProductDetails {...productDetails} />}
      </div>
    </section>
  )
}
export default CleanserStage
