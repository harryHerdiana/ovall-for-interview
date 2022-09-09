import { NewsletterRecordFragment, ResponsiveImageFragment } from '@modules/datocms/api/fragments'

export const ALL_PRODUCTS_QUERY = ` 
  query getAllProductPage($locale: SiteLocale!) {
    allProductPage(locale: $locale) {
      seoTags {
        description
        title
      }
      productImages {
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
      heroSection {
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
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 500 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
      testimonialSection {
        _modelApiKey
        title
        subtitle
      }
    }
  }
  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
`
