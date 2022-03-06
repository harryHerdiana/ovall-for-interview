import React from 'react'
import ShopContext from '@context/StoreContext'
import { IProductPage } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import Slider from '@component/Slider'
import { toEuro } from '@lib/utils'
import VariantSelect from './VariantSelect'
import AddToCartButton from './AddToCartButton'
import ProductClaimsSection from './ProductClaims'
import ProductSlideshow from './ProductSlideshow'

interface IProductStageProps extends IProductPage {
  variant: IShopifyProductVariant // derived from state (selected variant)
  activeSku: string
  setVariantSku: (sku: string) => void
  product: IShopifyProduct
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
  const shopContext = React.useContext(ShopContext)
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, 1)
    shopContext.setShowCart(true)
  }
  const skuColorMap = {
    'Ovall-Blue': 'green',
    'Ovall-Pink': 'rose',
    'Ovall-Turquoise': 'blue'
  }
  function getVariantImageBySku(sku: string) {
    return variantImages.find((image) => image.color === skuColorMap[sku])
  }

  return (
    <section className="gap-8 grid grid-cols-1 lg:grid-cols-2 md:p-4 xl:p-6 max-w-site mx-auto">
      <div className="text-center md:text-left mx-auto md:pr-0 flex flex-wrap self-center w-4/5">
        <div className="relative w-full ">
          <ProductSlideshow items={slideshowImages} variantItem={getVariantImageBySku(activeSku)} />
        </div>
      </div>
      <div className="text-center lg:text-left text-black p-4  flex flex-col flex-wrap mx-auto">
        <h1 className="w-full text-left mb-1">{product.title}</h1>
        <div className="text-left flex flex-row ">
          <span className=" self-center font-subtitleFont font-semibold text-2xl">
            {toEuro(variant.priceV2.amount)}
          </span>
          <div className="ml-8 md:ml-10">
            <div className="font-bold text-greenLink text-tiny md:text-tiny font-subtitleFont">
              Spare 20%{' '}
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
