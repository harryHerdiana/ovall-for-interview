import { IShopifyProduct } from '@modules/shopify/types'
import { Languages } from './enums'

export type Language = Languages.English | Languages.German

export type Context = {
  locales?: string[]
  locale?: string
  defaultLocale?: string
}

export type SeoTags = {
  description: string
  title: string
  imageUrl?: string
}

export type MenuItem = {
  id: string
  path: string
  label: string
}

export type IMenu = MenuItem[]

export interface IPageProps {
  seoTags: SeoTags
  menu: IMenu
}

export type ProductVariantImage = {
  color: 'blue' | 'rose' | 'green'
  image: {
    gradientBackground: 'rose' | 'green' | 'blue'
    image: DatoCMSResponsiveImage
  }[]
}

/** ***** PAGES ************** */

export interface IHomePageData extends IPageProps {
  heroSection: any // TODO add type
  infoSection: any // TODO add type
  slideshowSection: any // TODO add type
  testimonialSection: any // TODO add type
  productInfoSection: any // TODO add type
}

export interface IProductPageData extends IPageProps {
  productClaims: {
    text: string
    title: string
  }[]
  quantityCaption: string
  deliveryTime: string
  shopifyProduct: IShopifyProduct
  addToCartLabel: string
  colorCaption: string
  freeShippingCaption: string
  faqButtonText: string
  faqSubtitle: string
  faqTitle: string
  slug: string // check: do we need this?
  variantImages: ProductVariantImage[]
  moodSlideshowSection: any // TODO add type
  newsletterSection: any // TODO add type
  productInfoBannerFeatures: any // TODO add type
  productInfoBannerMiniSpa: any // TODO add type
  productInfoBannersection: any // TODO add type
}
/** ************************* */

/** ******** DATOCMS ********* */

export type DatoCMSResponsiveImage = {
  alt: string
  base64: string
  sizes: string
  src: string
  srcSet: string
  with: number
  height: number
}

/** *************  ********** */
