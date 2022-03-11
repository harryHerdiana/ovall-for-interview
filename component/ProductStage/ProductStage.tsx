import React from 'react'
import { IProductPage } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'
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
    variantImages
  }
}) => {
  // const shopContext = React.useContext(ShopContext)
  // const handleAddToCartClick = () => {
  //   shopContext.addVariantToCart(variant, 1)
  //   shopContext.setShowCart(true)
  // }
  const skuColorMap = {
    'Ovall-Blue': 'green',
    'Ovall-Pink': 'rose',
    'Ovall-Turquoise': 'blue'
  }
  function getVariantImageBySku(sku: string) {
    return variantImages.find((image) => image.color === skuColorMap[sku])
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 md:p-4 xl:p-12 max-w-site mx-auto mb-12">
      <div className="text-center md:text-left mx-auto md:pr-0 flex flex-wrap items-center justify-center  w-full ">
        <div className="relative w-full h-full lg:w-5/6">
          <ProductSlideshow items={slideshowImages} variantItem={getVariantImageBySku(activeSku)} />
        </div>
      </div>
      <div className="text-center lg:text-left text-black  flex flex-col flex-wrap mx-auto p-4 mt-8 lg:p-0 lg:mt-0">
        <h1 className="w-full text-left mb-1">{product.title}</h1>
        <div className="text-left flex flex-row mb-3 mt-8">
          <span className=" self-center font-subtitleFont font-semibold text-2xl">
            {toEuro(variant.priceV2.amount)}
          </span>
          <div className="ml-8 md:ml-10">
            <div className="font-bold text-greenLink text-tiny md:text-tiny font-subtitleFont">
              Spare 20%
            </div>
            <span className="line-through font-bold  font-subtitleFont">
              {toEuro(variant.compareAtPriceV2.amount)}
            </span>
          </div>
        </div>
        <VariantSelect
          addToCartLabel={addToCartLabel}
          variant={variant}
          colorCaption={colorCaption}
          setVariantSku={setVariantSku}
          variants={product.variants}
          quantityCaption={quantityCaption}
        />

        <div className="flex justify-between my-4">
          <span className="w-32 md:w-max text-left font-textFont">{deliveryTime}</span>
          <span className="text-greenLink font-textFont">{freeShippingCaption}</span>
        </div>
        <ProductClaimsSection productClaims={productClaims} />
      </div>
    </section>
  )
}
export default ProductStage
