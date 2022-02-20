export const GET_PRODUCT = `
query findProduct($handle: String!) {
  product (handle: $handle) {
    id
    title,
    handle,
    variants (first: 50) {
      edges {
        node {
          id,
          title,
          sku,
          priceV2 {
            amount
          },
          quantityAvailable,
          currentlyNotInStock,
          compareAtPriceV2 {
            amount
          },
          barcode
        }
      }
    }
  }
}`
