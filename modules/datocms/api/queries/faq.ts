import {
  NewsletterRecordFragment,
  ProductTeaserFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const FAQ_QUERY = ` 
  query getFAQPage($locale: SiteLocale!) {
    faqPage(locale: $locale) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 500 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      productTeaser {
        ...ProductTeaserFragment
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
      youtubeUrl
      faqAccordion {
        items {
          body
          text
          id
        }
      }
      buttonText
    }
  }

  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
  ${ProductTeaserFragment}
  
`
