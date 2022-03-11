import {
  NewsletterRecordFragment,
  ProductTeaserFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const ABOUT_US_QUERY = ` 
  query getAboutUsPage($locale: SiteLocale!) {
    aboutUsPage(locale: $locale) {
      seoTags {
        description
        title
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
            responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 400, h: 400 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      body {
        value,
        links
      }
      productTeaserSection {
        ...ProductTeaserFragment
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
      accordionSection {
        items {
          ... on AccordionItemHtmlRecord {
            id
            title
            subtitle
            _modelApiKey
            body {
              value
              links
              blocks{
                id
                __typename
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 600, h: 384 }) {
                    ...ResponsiveImageFragment
                  }
              }
             }
            }
          }
        }
      }
    }
  }

  ${ResponsiveImageFragment}
  ${NewsletterRecordFragment}
  ${ProductTeaserFragment}
  
`
