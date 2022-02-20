import Shopify from '@shopify/shopify-api'
import { GraphqlClient } from '@shopify/shopify-api/dist/clients/graphql/graphql_client'

console.log(
  'NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN',
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
)

export default new Shopify.Clients.Storefront(
  process.env.SHOPIFY_STOREFRONT_API_DOMAIN as string,
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN as string
) as GraphqlClient
