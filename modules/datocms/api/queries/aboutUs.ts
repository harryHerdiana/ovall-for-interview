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
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 500 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      
      allPagesHero {
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
      testimonialSection {
        _modelApiKey
        title
        subtitle
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
                  responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 500, h: 500 }) {
                    ...ResponsiveImageFragment
                  }
              }
             }
            }
          }
        }
      }
    }
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
  ${ProductTeaserFragment}
  
`
