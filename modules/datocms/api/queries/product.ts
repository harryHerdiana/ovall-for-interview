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
      addToCartLabel
      seoTags {
        description
        title
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
