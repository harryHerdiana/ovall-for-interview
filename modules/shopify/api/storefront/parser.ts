import { IShopifyProduct } from '@modules/shopify/types'

export default function parseProductResponse(graphqlQueryReponse: any): IShopifyProduct {
  const { product } = graphqlQueryReponse.body.data
  return {
    id: product.id,
    title: product.title,
    handle: product.title,
    variants: product.variants.edges.map((variantEdge) => ({
      id: variantEdge.node.id,
      title: variantEdge.node.title,
      sku: variantEdge.node.sku,
      priceV2: variantEdge.node.priceV2,
      compareAtPriceV2: variantEdge.node.compareAtPriceV2,
      quantityAvailable: variantEdge.node.quantityAvailable,
      currentlyNotInStock: variantEdge.node.currentlyNotInStock,
      barcode: variantEdge.node.barcode
    }))
  }
}
