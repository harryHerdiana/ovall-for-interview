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
    <div className="pb-5 md:pb-16 z-auto">
      {checkout.lineItems.map((lineItem: IShopifyLineItem, index) => (
        <div key={lineItem.id}>
          <LineItem
            lineItem={lineItem}
            key={lineItem.id}
            image={getImage(lineItem, variantImages)}
          />
          <hr className="border-grayLine w-full" />
        </div>
      ))}
    </div>
  )
}

export default Cart
