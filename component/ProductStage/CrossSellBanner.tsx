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

  const ButtonGroup = () => (
    <div className="sm:mt-20 mt-10 text-left">
      {variant.quantityAvailable < 1 ? (
        <AddToCartButton disabled buttonType="disabled" onClick={handleAddToCartClick}>
          <span>{soldoutLabel.toUpperCase()}</span>
        </AddToCartButton>
      ) : (
        <AddToCartButton buttonType="primary" onClick={handleAddToCartClick}>
          {addToCartLabel}
        </AddToCartButton>
      )}
      <p className="text-xs mt-2">{crossSellBanner.discountTerms}</p>
    </div>
  )

  return (
    <div className="mt-16 lg:px-8">
      <GradientSquare variantGradient="violet">
        <div className="px-4 py-6">
          <h2 className="sm:text-left text-center text-xl sm:text-2xl">
            {crossSellBanner.headline}
          </h2>
          <div className="flex items-center">
            <ResponsiveImage image={crossSellBanner.productImage.responsiveImage} />
            <div className="ml-6 mt-3 sm:mt-6 text-left">
              <ScrollableLink anchor="testimonial" className="no-underline text-black">
                <ProductRating />
              </ScrollableLink>
              <h3 className="mt-3">{productCleanser.title}</h3>
              <p>{crossSellBanner.productDescription}</p>
              <p>{crossSellBanner.productVolume}</p>
              <p className="mt-6 ">
                <span className="line-through text-xl font-subtitleFont">
                  {/* {toEuro(variant.compareAtPriceV2.amount)} tempoary commented due to the discount price isn't available */}
                  {toEuro(25.99)}
                </span>
                <span className="sm:ml-5 ml-3 font-bold text-2xl font-titleFont">
                  {toEuro(variant.priceV2.amount)}
                </span>
              </p>
              <div id="discount-info">
                <StructuredText data={crossSellBanner.discountInfo} />
              </div>
              <div className="hidden sm:block">
                <ButtonGroup />
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <ButtonGroup />
          </div>
        </div>
      </GradientSquare>
    </div>
  )
}
export default CrossSellBanner
