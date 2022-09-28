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

export type DatoCMSImage = {
  alt: string
  src: string
  height: number
  width: number
  url: string
}

export type DatoProductVariantImage = {
  color: 'blue' | 'rose' | 'green' | ''
  image: {
    gradientBackground: 'lotus-pink' | 'green' | 'blue' | 'people' | 'grey' | 'white'
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

export interface IDatoCleanserPage {
  productDesc?: string
  volume?: string
  seoTags: SeoTags
  quantityCaption: string
  deliveryTime: string
  addToCartLabel: string
  colorCaption: string
  freeShippingCaption: string
  faqButtonText: string
  faqSubtitle: string
  faqTitle: string
  soldoutLabel: string
  discountLabel: string
  faqItems: {
    items: IDatoAccordionItem[]
  }
  slug: string // check: do we need this?
  // variantImages: DatoProductVariantImage[] // Does cleanser have a variant?
  slideshowItems: {
    id: string
    gradientBackground: string
    image: {
      responsiveImage: DatoCMSResponsiveImage
    }
    descriptionLabel: string
    descriptionText: string
  }[]
  productClaims: {
    id: string
    text: string
    title: string
    image?: DatoCMSImage
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
  testimonialSection: {
    subtitle: string
    title: string
  }
  productInfoBannerFeatures: IDatoProductBannerSection
  productInfoAccordionSection: {
    buttonText: string
    items: IDatoAccordionItem[]
  }
  newsletterSection: IDatoNewsletterSection
  beforeAfterBanner: DatoCMSBeforeAfterBanner
  productStageAccordion: DatoProductStageAccordion
  faqAccordionShampoo: {
    name: string
    items: IDatoAccordionItem[]
  }
  ingredient: {
    background: { backgroundColor: string }[]
    ingredientAccordion: {
      id: string
      text: string
      body?: string
      promise?: {
        icon: string
        text: string
        id: string
      }[]
    }[]
    content: { text: string; title: string; _modelApiKey: string }[]
  }
  productDetail: {
    title: string
    iconList: {
      icon: string
      id: string
      text: string
    }[]
  }[]
}
export interface IDatoProductPage {
  productDesc?: string
  volume?: string
  seoTags: SeoTags
  quantityCaption: string
  deliveryTime: string
  addToCartLabel: string
  colorCaption: string
  freeShippingCaption: string
  faqButtonText: string
  faqSubtitle: string
  faqTitle: string
  soldoutLabel: string
  discountLabel: string
  faqItems: {
    items: IDatoAccordionItem[]
  }
  productSlogan?: {
    normalText: string
    boldText: string
  }[]
  slug: string // check: do we need this?
  variantImages: DatoProductVariantImage[]
  slideshowItems: {
    id: string
    gradientBackground: string
    image: {
      responsiveImage: DatoCMSResponsiveImage
    }
    descriptionLabel: string
    descriptionText: string
  }[]
  productClaims: {
    id: string
    text: string
    title: string
    image?: DatoCMSImage
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
  testimonialSection: {
    subtitle: string
    title: string
  }
  productInfoBannerFeatures: IDatoProductBannerSection
  productInfoAccordionSection: {
    buttonText: string
    items: IDatoAccordionItem[]
  }
  newsletterSection: IDatoNewsletterSection
  beforeAfterBanner: DatoCMSBeforeAfterBanner
  productStageAccordion: DatoProductStageAccordion
  faqAccordionShampoo: {
    name: string
    items: IDatoAccordionItem[]
  }
  ingredient: {
    background: { backgroundColor: string }[]
    ingredientAccordion: {
      id: string
      text: string
      body?: string
      promise?: {
        icon: string
        id: string
        text: string
      }[]
    }[]
    content: { text: string; title: string; _modelApiKey: string }[]
  }
  productDetail: {
    title: string
    iconList: {
      icon: string
      id: string
      text: string
    }[]
  }[]
  crossSellBanner?: {
    discountInfo: {
      value: StructuredTextDocument
    }
    headline: string
    discountTerms: string
    productVolume: string
    productDescription: string
    productImage: {
      responsiveImage: DatoCMSResponsiveImage
    }
  }
}

export interface IDatoHomepage {
  moodSlideshowSection: any // TODO add type
  howToUseSection: IDatoHowToUseSection
  newsletterSection: IDatoNewsletterSection
}

export interface IColumnNavItem {
  id: string
  _modelApiKey: 'navigation_link'
  label: string
  internalLink: {
    slug: string
    title: string
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

export type DatoCMSBeforeAfterBanner = {
  kicker: string
  title: string
  backgroundColor: string
  disclaimer: string
  items: {
    id: string
    text: string
    title: string
  }[]
  image: {
    responsiveImage: DatoCMSResponsiveImage
  }
}

export type DatoProductStageAccordion = {
  items: {
    id: string
    text: string
    image?: {
      responsiveImage: DatoCMSResponsiveImage
    }
    items: {
      id: string
      text: string
      title: string
    }[]
  }[]
}
