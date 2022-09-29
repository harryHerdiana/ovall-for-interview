import React from 'react'

import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { ICartText, IProductVariantImage } from '@lib/types'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import LineItem from './LineItem'

interface IProps extends ICartText {
  variantImages: IProductVariantImage[]
}

const getImage = (
  lineItem: IShopifyLineItem,
  variantImages: IProductVariantImage[]
): DatoCMSResponsiveImage => {
  const vImage = variantImages.find((variantImage) => {
    switch (lineItem.variant.sku) {
      case 'Ovall-Blue':
        return variantImage.color === 'blue'
      case 'Ovall-Turquoise':
        return variantImage.color === 'green'
      case 'Ovall-Pink':
        return variantImage.color === 'rose'
      case 'Ovall-Turquoise-Cleansing-Bundle':
        return variantImage.color === 'bundle-green'
      case 'Ovall-Blue-Cleansing-Bundle':
        return variantImage.color === 'bundle-blue'
      case 'Ovall-Pink-Cleansing-Bundle':
        return variantImage.color === 'bundle-rose'
      case 'Ovall-Aloe-Wash':
        return variantImage.color === 'cleanser'
      default:
        return variantImage.color === 'blue'
    }
  })

  return vImage.image
}

const Cart: React.FC<IProps> = ({ cartEmpty, variantImages }) => {
  const { checkout } = React.useContext(ShopContext)

  if (checkout.lineItems.length === 0) {
    return (
      <div className="text-center text-gray-300 font-bold text-base">
        <span className="block px-16 py-20">{cartEmpty}</span>
      </div>
    )
  }

  return (
    <div className="pb-5 md:pb-4 z-auto">
      {checkout.lineItems.map((lineItem: IShopifyLineItem) => (
        <div key={lineItem.id}>
          <LineItem
            lineItem={lineItem}
            key={lineItem.id}
            image={getImage(lineItem, variantImages)}
          />
          {checkout.lineItems.length > 1 && <hr className="border-grayLine w-full" />}
        </div>
      ))}
    </div>
  )
}

export default Cart
