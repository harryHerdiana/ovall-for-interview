import React from 'react'
import { StructuredText } from 'react-datocms'
import ShopContext from '@context/StoreContext'
import { ICrossSellBanner } from '@lib/types'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'
import GradientSquare from '@component/GradientSquare'
import ResponsiveImage from '@component/ResponsiveImage'
import ScrollableLink from '@component/ScrollableLink'
import { ProductRating } from '@component/ProductReview'
import { toEuro } from '@lib/utils'
import AddToCartButton from './AddToCartButton'

interface ICrossSellBannerProps {
  productCleanser: IShopifyProduct
  crossSellBanner: ICrossSellBanner
  variant: IShopifyProductVariant
  addToCartLabel: string
  soldoutLabel: string
}

const CrossSellBanner: React.FC<ICrossSellBannerProps> = ({
  productCleanser,
  crossSellBanner,
  variant,
  addToCartLabel,
  soldoutLabel
}) => {
  const shopContext = React.useContext(ShopContext)
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, 1)
    shopContext.setShowCart(true)
  }

  return (
    <div className="mt-16">
      <GradientSquare variantGradient="violet">
        <div>
          <h3 className="text-center">{crossSellBanner.headline}</h3>
          <div className="flex">
            <ResponsiveImage image={crossSellBanner.productImage.responsiveImage} />
            <div>
              <ScrollableLink anchor="testimonial" className="no-underline text-black">
                <ProductRating />
              </ScrollableLink>
              <p>{productCleanser.title}</p>
              <p>{crossSellBanner.productDescription}</p>
              <p>{crossSellBanner.productVolume}</p>
              <p>
                <span className="line-through font-bold text-sm font-subtitleFont">
                  {/* {toEuro(variant.compareAtPriceV2.amount)} tempoary commented due to the discount price isn't available */}
                  {toEuro(19.99)}
                </span>
                {toEuro(variant.priceV2.amount)}
              </p>
              <StructuredText data={crossSellBanner.discountInfo} />
              <div className="mt-2">
                {variant.quantityAvailable < 1 ? (
                  <AddToCartButton disabled buttonType="disabled" onClick={handleAddToCartClick}>
                    <span>{soldoutLabel.toUpperCase()}</span>
                  </AddToCartButton>
                ) : (
                  <AddToCartButton buttonType="primary" onClick={handleAddToCartClick}>
                    {addToCartLabel}
                  </AddToCartButton>
                )}
                <p>{crossSellBanner.discountTerms}</p>
              </div>
            </div>
          </div>
        </div>
      </GradientSquare>
    </div>
  )
}
export default CrossSellBanner
