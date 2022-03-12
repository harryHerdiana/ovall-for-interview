import {
  NewsletterRecordFragment,
  ProductInfoBannerFragment,
  ProductTeaserFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const RATINGS_QUERY = ` 
  query getRatingPage($locale: SiteLocale!) {
    ratingPage(locale: $locale) {
      seoTags {
        description
        title
      }
      heroSection {
        ... on SectionHeadlineRecord {
          id
          text
          _modelApiKey
        }
        ... on SectionTextRecord {
          id
          text
          _modelApiKey
        }
        ... on SectionWithGradientBackgroundRecord {
          _modelApiKey
          id
          title
          backgroundColor
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 384 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      productFeatureSection {
        ...ProductInfoBannerFragment
      }
      productTeaser {
        ...ProductTeaserFragment
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
    }
  }

  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
  ${ProductTeaserFragment}
  ${ProductInfoBannerFragment}
  
`
