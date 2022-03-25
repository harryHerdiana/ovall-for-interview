export interface IShopifyProductVariant {
  id: string
  title: string
  priceV2: {
    amount: string
  }
  compareAtPriceV2: {
    amount: string
  }
  sku: string
  quantityAvailable: number
  currentlyNotInStock: boolean
  barcode?: string
  image: IShopifyImage
}

export interface IShopifyProduct {
  id: string
  title: string
  handle: string
  variants: IShopifyProductVariant[]
}

export interface IShopifyLineItemVariant extends IShopifyProductVariant {
  product: {
    id: string
    handle: string
  }
  selectedOptions: {
    title: string
    value: string
  }[]
}
export interface IShopifyLineItem {
  id: string
  title: string
  quantity: number
  variant: IShopifyLineItemVariant
  hasPreviousPage: boolean
}

export interface IShopifyImage {
  altText: string
  height: number
  id: string
  src: string
  width: number
}

export interface IShopifyCheckout {
  id: string
  lineItems: IShopifyLineItem[]
  lineItemsSubtotalPrice: {
    amount: string
  }
  discountApplications: {
    targetSelection: string
    applicable: boolean
    code: string
  }[]
  subtotalPriceV2: {
    amount: string
  }
  webUrl: string
  totalPrice: string
  completedAt: string
}
