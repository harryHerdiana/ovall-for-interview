import React from 'react'
import ShopContext from '@context/StoreContext'
import { IProductPageData } from '@lib/types'
import { IShopifyProductVariant } from '@modules/shopify/types'
import VariantSelect from './VariantSelect'
import AddToCartButton from './AddToCartButton'

interface IProductStateProps extends IProductPageData {
  variant: IShopifyProductVariant // derived from state (selected variant)
  activeSku: string
  setVariantSku: (sku: string) => void
}

const ProductStage: React.FC<IProductStateProps> = ({
  shopifyProduct: product,
  variant,
  activeSku,
  setVariantSku,
  addToCartLabel
}) => {
  const shopContext = React.useContext(ShopContext)
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, 1)
    shopContext.setShowCart(true)
  }
  return (
    <section className="gap-8 grid grid-cols-1 md:grid-cols-2 md:p-4 xl:p-6 max-w-site mx-auto">
      <div className="text-center md:text-left text-black p-4 md:pl-8 md:pr-0 xl:pl-24 flex flex-wrap self-center">
        <h1 className="w-full font-extrabold text-3xl md:text-4xl lg:text-4xl leading-headline mb-1">
          {product.title}
        </h1>
        <VariantSelect
          variantSku={activeSku}
          setVariantSku={setVariantSku}
          variants={product.variants}
        />
        <AddToCartButton onClick={handleAddToCartClick}>{addToCartLabel}</AddToCartButton>
      </div>
    </section>
  )
}
export default ProductStage
