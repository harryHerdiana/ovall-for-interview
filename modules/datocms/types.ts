import { StructuredTextDocument } from 'react-datocms'

export type SeoTags = {
  description: string
  title: string
  imageUrl?: string
}

export type DatoCMSResponsiveImage = {
  alt: string
  base64: string
  sizes: string
  src: string
  srcSet: string
  width: number
  height: number
  aspectRatio: number
}

export type DatoProductVariantImage = {
  color: 'blue' | 'rose' | 'green'
  image: {
    gradientBackground: 'lotus-pink' | 'green' | 'blue' | 'people'
    image: {
      responsiveImage: DatoCMSResponsiveImage
    }
  }[]
}

export type SectionHeadline = {
  _modelApiKey: 'section_headline'
  text: string
}

export type SectionCallToAction = {
  _modelApiKey: 'section_call_to_action'
  text: string
  elementType: string
  openInNewTab: boolean
  dropdownText?: StructuredTextDocument
}

export type SectionWithGradientBackground = {
  _modelApiKey: 'section_with_gradient_background'
  backgroundColor: string
  title: string
  image: {
    responsiveImage: DatoCMSResponsiveImage
  }
}

export type SectionText = {
  _modelApiKey: 'section_text'
  text: string
}

export interface IDatoProductBannerSection {
  content: Array<
    SectionHeadline | SectionCallToAction | SectionWithGradientBackground | SectionText
  >
}

export interface IDatoNewsletterSection {
  placeholder: string
  subheader: string
  title: string
  disclaimer: {
    value: StructuredTextDocument
  }
  description: {
    value: StructuredTextDocument
  }
  buttonText: string
}

export interface IDatoAccordionItem {
  text: string
  body: string
}

export interface IDatoHowToUseSection {
  header: string
  items: {
    id: string
    header: string
    description: string
    image: {
      image: {
        responsiveImage: DatoCMSResponsiveImage
      }
    }[]
  }[]
}
export interface IDatoProductPage {
  seoTags: SeoTags
  quantityCaption: string
  deliveryTime: string
  addToCartLabel: string
  colorCaption: string
  freeShippingCaption: string
  faqButtonText: string
  faqSubtitle: string
  faqTitle: string
  faqItems: {
    items: IDatoAccordionItem[]
  }
  slug: string // check: do we need this?
  variantImages: DatoProductVariantImage[]
  productClaims: {
    id: string
    text: string
    title: string
    image?: {
      responsiveImage: DatoCMSResponsiveImage
    }
  }[]
  productDescriptionSection: {
    _modelApiKey: string
    text: string
  }[]
  howToUseSection: IDatoHowToUseSection
  skinTypeInfoSection: Array<SectionWithGradientBackground | SectionText>
  productInfoBannerMiniSpa: IDatoProductBannerSection
  productInfoBannerSection: IDatoProductBannerSection
  moodSlideshowSection: any // TODO add type
  productInfoBannerFeatures: IDatoProductBannerSection
  productInfoAccordionSection: {
    buttonText: string
    items: IDatoAccordionItem[]
  }
  newsletterSection: IDatoNewsletterSection
}

export interface IDatoHomepage {
  howToUseSection: IDatoHowToUseSection
  newsletterSection: IDatoNewsletterSection
}

export interface IColumnNavItem {
  id: string
  _modelApiKey: 'navigation_link'
  label: string
  internalLink: {
    slug: string
  }
}

export interface IColumnTitle {
  id: string
  _modelApiKey: 'section_headline'
  text: string
}
export interface IDatoFooter {
  facebook: string
  pinterest: string
  instagram: string
  youtube: string
  followUsText: string
  followUsTitle: string
  leftColumn: Array<IColumnNavItem | IColumnTitle>
  middleColumn: Array<IColumnNavItem | IColumnTitle>
}
