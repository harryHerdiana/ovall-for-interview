import { DatoCMSImage, DatoCMSResponsiveImage, IDatoAccordionItem } from '@modules/datocms/types'
import { IShopifyProduct } from '@modules/shopify/types'
import { StructuredText } from 'datocms-structured-text-utils'
import { StructuredTextDocument } from 'react-datocms'
import { UrlWithStringQuery } from 'url'
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

export interface ITopMenu {
  notification: string
  items: MenuItem[]
}

export type MenuItem = {
  id: string
  path: string
  label: string
  title: string
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

export interface ICookieNotice {
  acceptText: string
  denyText: string
  text: StructuredText
  title: UrlWithStringQuery
  moreInfo: string
}

export interface IAppContent {
  menu: ITopMenu
  footer: IFooter
  cookieNotice: ICookieNotice
  cart: ICartText
}

export interface IDefaultProps {
  appProps: {
    menu: ITopMenu
    cookieNotice: ICookieNotice
    footer: IFooter
    cart: ICartText
    variantImages: IProductVariantImage[]
  }
  seoTags: SeoTags
  product: IShopifyProduct
}

export interface ICartText {
  cartEmpty: string
  buttonText: string
  cartName: string
  closeCart: string
  taxInfo: string
  total: string
}

export interface IProductVariantImage {
  id: string
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

/** * SECTIONS */

export interface IHowToUseSection {
  title: string
  items: {
    id: string
    title: string
    image: DatoCMSResponsiveImage
    description: string
  }[]
}

export interface INewsletterSection {
  placeholder: string
  subheader: string
  title: string
  disclaimer: StructuredTextDocument
  description: StructuredTextDocument
  buttonText: string
}

export interface IProductInfoTechnologySection {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
}

export interface IProductTeaserSection {
  title: string
  buttonText: string
  image: DatoCMSResponsiveImage
  backgroundColor: string
}

export interface IHtmlAccordionItem {
  id: string
  title: string
  subtitle: string
  body: StructuredText
}

/** ***** PAGES ************** */

export interface IStaticPage {
  heroSection: {
    backgroundColor: string
    title: string
    text: string
  }
  content: StructuredText
}

export interface IHomePage {
  heroSection: {
    buttonText: string
    title: string
    body: string
    image: DatoCMSResponsiveImage
    backgroundColor: string
  }
  testimonialSection: {
    kicker: string
    title: string
  }
  moodSlideshowSection: IMoodSlideshow
  productInfoBannerTechnology: IProductInfoTechnologySection
  productInfoAccordionSection: {
    buttonText: string
    items: IDatoAccordionItem[]
  }
  howToUseSection: IHowToUseSection
  infoSection: any // TODO add type
  productTeaserSection: IProductTeaserSection
  newsletterSection: INewsletterSection
}

export interface IRatingsPage {
  heroSection: {
    backgroundColor: string
    kicker: string
    title: string
    image: DatoCMSResponsiveImage
  }
  productFeatureSection: {
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
  productTeaserSection: IProductTeaserSection
  newsletterSection: INewsletterSection
}

export interface IFAQPage {
  heroSection: {
    backgroundColor: string
    kicker: string
    title: string
    image: DatoCMSResponsiveImage
  }
  faqSection: {
    items: IDatoAccordionItem[]
    buttonText: string
  }
  descriptionSection: {
    videoUrl: string
  }
  productTeaserSection: IProductTeaserSection
  newsletterSection: INewsletterSection
}

export interface IAboutUsPage {
  heroSection: {
    backgroundColor: string
    title?: string
    body?: string
    image?: DatoCMSResponsiveImage
  }
  content: StructuredText
  accordionSection: {
    items: IHtmlAccordionItem[]
  }
  productTeaserSection: IProductTeaserSection
  newsletterSection: INewsletterSection
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
      image?: DatoCMSImage
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
  testimonialSection: {
    kicker: string
    title: string
  }
  howToUseSection: IHowToUseSection
  moodSlideshowSection: IMoodSlideshow
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
  productInfoBannerTechnology: IProductInfoTechnologySection
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
  newsletterSection: INewsletterSection
  // slug: string // check: do we need this?
  // moodSlideshowSection: any // TODO add type
  // productInfoBannerFeatures: any // TODO add type
}
/** ************************* */

/** ******** DATOCMS ********* */

/** *************  ********** */
