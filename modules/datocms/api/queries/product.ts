import {
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
        color
        createdAt
        image {
          gradientBackground
          image {
            responsiveImage {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      title
      slug
      freeShippingCaption
      deliveryTime
      colorCaption
      deliveryTime
      quantityCaption
      addToCartLabel
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
      moodSlideshowSection {
        ...MoodSlideshowRecordFragment
      }
      productInfoBannerFeatures {
        ...ProductInfoBannerFragment
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
    }
  }

  ${ProductInfoBannerFragment}
  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
  ${MoodSlideShowFragment}
`
