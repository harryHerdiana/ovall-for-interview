import { Languages } from '@lib/enums'
import { Language } from '@lib/types'
import Client, { GraphQlClient } from 'shopify-buy'

export const getShopifyClient = (language: Language = Languages.German): GraphQlClient =>
  Client.buildClient({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN_BUY_API as string,
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN as string,
    language
  })
