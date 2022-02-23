import {
  MoodSlideShowFragment,
  NewsletterRecordFragment,
  ProductInfoBannerFragment,
  // ProductInfoAccordionRecordFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export default `
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
      faqTitle
      faqSubtitle
      freeShippingCaption
      deliveryTime
      faqButtonText
      colorCaption
      deliveryTime
      quantityCaption
      addToCartLabel
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
