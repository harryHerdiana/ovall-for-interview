import React from 'react'
import ShopContext from '@context/StoreContext'
import { IProductPage } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import Slider from '@component/Slider'
import { toEuro } from '@lib/utils'
import VariantSelect from './VariantSelect'
import AddToCartButton from './AddToCartButton'
import ProductClaimsSection from './ProductClaims'

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
    freeShippingCaption
  }
}) => {
  const shopContext = React.useContext(ShopContext)
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, 1)
    shopContext.setShowCart(true)
  }

  return (
    <section className="gap-8 grid grid-cols-1 md:grid-cols-2 md:p-4 xl:p-6 max-w-site mx-auto">
      <div className="text-center md:text-left text-black p-4 md:pl-8 md:pr-0 xl:pl-24 flex flex-wrap self-center">
        <div className="relative w-full px-4">
          <Slider items={[]} />
        </div>
      </div>
      <div className="text-center md:text-left text-black p-4 md:pl-8 md:pr-0 xl:pl-24 flex flex-col flex-wrap self-center">
        <h1 className="w-full text-left font-extrabold text-3xl md:text-4xl lg:text-4xl leading-headline mb-1">
          {product.title}
        </h1>
        <div className="text-left flex flex-row ">
          <div className="text-2xl self-center font-bold">{toEuro(variant.priceV2.amount)}</div>
          <div className="text-md ml-8 md:ml-10">
            <div className="font-bold text-greenLinks-500 text-sm md:text-md">Spare 20% </div>
            <div className="line-through font-bold">{toEuro(variant.compareAtPriceV2.amount)}</div>
          </div>
        </div>
        <VariantSelect
          colorCaption={colorCaption}
          setVariantSku={setVariantSku}
          variants={product.variants}
          quantityCaption={quantityCaption}
        />
        <AddToCartButton onClick={handleAddToCartClick}>{addToCartLabel}</AddToCartButton>
        <div className="flex justify-between my-4">
          <div className="w-32 md:w-max text-left">{deliveryTime}</div>
          <div className="font-bold text-greenLinks-500">{freeShippingCaption}</div>
        </div>
        <ProductClaimsSection productClaims={productClaims} />
      </div>
    </section>
  )
}
export default ProductStage
