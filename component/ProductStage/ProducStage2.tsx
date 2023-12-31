import React from 'react'
import { toEuro } from '@lib/utils'
import { ProductRating } from '@component/ProductReview'
import ScrollableLink from '@component/ScrollableLink'
import VariantSelect from './VariantSelect'
import ProductClaimsSection from './ProductClaims'
import ProductSlideshow from './ProductSlideshow'
import ProducStageAccordion from './ProductStageAccordion'
import { IProductStageProps, skuColorMap } from './ProductStage'
import CrossSellBanner from './CrossSellBanner'

const ProductStage2: React.FC<IProductStageProps> = ({
  product,
  variant,
  activeSku,
  setVariantSku,
  productCleanser,
  crossSellBanner,
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
    discountLabel,
    productStageAccordion,
    productSlogan
  }
}) => {
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
        {crossSellBanner && (
          <div className="hidden sm:block">
            <CrossSellBanner
              productCleanser={productCleanser}
              crossSellBanner={crossSellBanner}
              addToCartLabel={addToCartLabel}
              variant={productCleanser.variants[0]}
              soldoutLabel={soldoutLabel}
            />
          </div>
        )}
      </div>
      <div className="text-center lg:text-left text-black  flex flex-col flex-wrap mx-auto p-4 mt-12 lg:mt-4 lg:p-0  lg:pt-5 lg:pr-8 site:pr-0">
        <div className="w-full text-left mb-1 h2_element_normalcase">{product.title}</div>
        <div className="mt-1 self-start" style={{ minHeight: '25px' }}>
          <ScrollableLink anchor="testimonial" className="no-underline text-black">
            <ProductRating />
          </ScrollableLink>
        </div>
        <span className="mt-7 font-textFont text-left">
          {productSlogan.normalText}{' '}
          <strong className="font-textFontBold">{productSlogan.boldText}</strong>
        </span>
        <div className="text-left flex flex-row mb-3 ">
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
        <ProducStageAccordion {...productStageAccordion} />
      </div>
      {crossSellBanner && (
        <div className="block sm:hidden">
          <CrossSellBanner
            productCleanser={productCleanser}
            crossSellBanner={crossSellBanner}
            addToCartLabel={addToCartLabel}
            variant={productCleanser.variants[0]}
            soldoutLabel={soldoutLabel}
          />
        </div>
      )}
    </section>
  )
}
export default ProductStage2
