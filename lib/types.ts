import { DatoCMSResponsiveImage, IDatoAccordionItem } from '@modules/datocms/types'
import { IShopifyProduct } from '@modules/shopify/types'
import { StructuredTextDocument } from 'react-datocms'
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

export type IFooter = {
  leftColumn: {
    title: string
    items: MenuItem[]
  }
  middleColumn: {
    title: string
    items: MenuItem[]
  }
  rightColumn: {
    title: string
    text: string
    facebook: string
    instagram: string
    pinterest: string
    youtube: string
  }
}

export interface IDefaultProps {
  product: IShopifyProduct
  seoTags: SeoTags
  menu: IMenu
  footer: IFooter
}

/** ***** PAGES ************** */

export interface IHomePage {
  heroSection: any // TODO add type
  infoSection: any // TODO add type
  slideshowSection: any // TODO add type
  testimonialSection: any // TODO add type
  productInfoSection: any // TODO add type
}

export interface IProductVariantImage {
  color: string
  background: string
  image: DatoCMSResponsiveImage
}

export interface IBaseGradientSection {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
  buttonTetx?: string
}

export interface IProductSlideshowImage {
  id: string
  background?: string
  image: DatoCMSResponsiveImage
}

export interface IMoodSlideshowItem {
  id: string
  title: string
  text: string
  background?: string
  image: DatoCMSResponsiveImage
}
export interface IMoodSlideshow {
  kicker: string
  title: string
  items: IMoodSlideshowItem[]
}

export interface IProductPage {
  stageSection: {
    quantityCaption: string
    addToCartLabel: string
    colorCaption: string
    freeShippingCaption: string
    deliveryTime: string
    productClaims: {
      id: string
      text: string
      title: string
      image?: DatoCMSResponsiveImage
    }[]
    variantImages: IProductVariantImage[]
    slideshowImages: IProductSlideshowImage[]
  }
  faqSection: {
    faqButtonText: string
    faqSubtitle: string
    faqTitle: string
    items: IDatoAccordionItem[]
  }
  descriptionSection: {
    title: string
    text: string
    videoUrl: string
  }
  moodSlideshowSection: IMoodSlideshow
  howToUseSection: {
    title: string
    items: {
      id: string
      title: string
      image: DatoCMSResponsiveImage
      description: string
    }[]
  }
  skinTypeInfoSection: {
    backgroundColor: string
    image: DatoCMSResponsiveImage
    title: string
    body: string
  }
  productInfoBannerSection: {
    backgroundColor: string
    image: DatoCMSResponsiveImage
    title: string
    body: string
    buttonText: string
    dropDownText: StructuredTextDocument // see https://www.datocms.com/docs/react/structured-text-fields
  }
  productInfoBannerTechnology: {
    backgroundColor: string
    image: DatoCMSResponsiveImage
    title: string
    body: string
  }
  productInfoBannerFeatures: {
    title: string
    backgroundColor: string
    image: DatoCMSResponsiveImage
    items: {
      id: string
      icon: string
      title: string
      text: StructuredTextDocument
    }[]
  }
  productInfoAccordionSection: {
    buttonText: string
    items: IDatoAccordionItem[]
  }
  newsletterSection: {
    placeholder: string
    subheader: string
    title: string
    disclaimer: StructuredTextDocument
    description: StructuredTextDocument
    buttonText: string
  }
  // slug: string // check: do we need this?
  // moodSlideshowSection: any // TODO add type
  // productInfoBannerFeatures: any // TODO add type
}
/** ************************* */

/** ******** DATOCMS ********* */

/** *************  ********** */
