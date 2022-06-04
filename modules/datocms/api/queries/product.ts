import {
  HowToUseSectionFragment,
  MoodSlideShowFragment,
  NewsletterRecordFragment,
  ProductInfoBannerFragment,
  // ProductInfoAccordionRecordFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const PRODUCT_PAGE_QUERY = `
  query getProduct($locale: SiteLocale!) {
    product(locale: $locale) {
      variantImages {
        id
        color
        createdAt
        image {
          gradientBackground
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 600 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      slideshowItems {
        id
        gradientBackground
        image {
          responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 600 }) {
            ...ResponsiveImageFragment
          }
        }
        descriptionLabel
        descriptionText
      }
      title
      slug
      freeShippingCaption
      deliveryTime
      colorCaption
      deliveryTime
      quantityCaption
      addToCartLabel
      discountLabel
      soldoutLabel
      faqTitle
      faqSubtitle
      faqButtonText
      faqItems {
        items {
          text
          body
        }
      }
      seoTags {
        description
        title
      }
      productClaims {
        id
        text
        title
        image {
          alt
          url
          width
          height
        }
      }
      productDescriptionSection {
        ... on SectionHeadlineRecord {
          _modelApiKey
          text
        }
        ... on SectionTextRecord {
          _modelApiKey
          text
        }
        ... on VideoUrlRecord {
          _modelApiKey
          url
        }
      }
      skinTypeInfoSection {
        ... on SectionWithGradientBackgroundRecord {
          id
          title
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 400 }) {
              ...ResponsiveImageFragment
            }
          }
          backgroundColor
          _modelApiKey
        }
        ... on SectionTextRecord {
          id
          text
          _modelApiKey
        }
      }
      moodSlideshowSection {
        ...MoodSlideshowRecordFragment
      }
      productInfoBannerSection {
        ...ProductInfoBannerFragment
      }
      productInfoBannerMiniSpa {
        ...ProductInfoBannerFragment
      }
      productInfoAccordionSection {
        buttonText
        items {
          text
          body
        }
      }
      productInfoBannerFeatures {
        ...ProductInfoBannerFragment
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
      howToUseSection {
        ...HowToUseSectionFragment
      }
      testimonialSection {
        subtitle
        title
      }

      beforeAfterBanner {
        backgroundColor
        kicker
        name
        title
        disclaimer
        items {
          text
          title
          id
        }
        image {
          responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 600 }) {
            ...ResponsiveImageFragment
          }
        }
      }

      productStageAccordion {
        items {
          id
          text
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 600 }) {
              ...ResponsiveImageFragment
            }
          }
          items {
            id
            text
            title
          }
        }
      }
    }
  }

  ${ProductInfoBannerFragment}
  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
  ${MoodSlideShowFragment}
  ${HowToUseSectionFragment}
`
