import {
  MoodSlideShowFragment,
  NewsletterRecordFragment,
  ProductInfoAccordionRecordFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const HOMEPAGE_QUERY = ` 
  query getHomePage($locale: SiteLocale!) {
    homepage(locale: $locale) {
      id
      accordionSection {
        ...ProductInfoAccordionRecordFragment
      }
      heroSection {
        ... on SectionCallToActionRecord {
          id
          elementType
          openInNewTab
          text
        }
        ... on SectionTextRecord {
          id
          text
          _modelApiKey
        }
        ... on SectionWithGradientBackgroundRecord {
          id
          title
          _modelApiKey
          image {
            url
            height
            width
            responsiveImage {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      howToUseSection {
        _modelApiKey
        header
        items {
          id
          header
          description
          image {
            gradientBackground
            image {
              responsiveImage {
                ...ResponsiveImageFragment
              }
            }
          }
        }
      }
      infoSection {
        content {
          ... on SectionWithGradientBackgroundRecord {
            id
            _modelApiKey
            title
            image {
              responsiveImage {
                ...ResponsiveImageFragment
              }
            }
          }
          ... on SectionTextRecord {
            id
            text
          }
          ... on SectionHeadlineRecord {
            id
            text
          }
          ... on SectionCallToActionRecord {
            id
            openInNewTab
            text
            elementType
          }
        }
        name
      }
      newsletterSection {
        ...NewsletterRecordFragment
      }
      productInfoSection {
        content {
          ... on SectionWithGradientBackgroundRecord {
            id
            title
            backgroundColor
            _modelApiKey
            image {
              responsiveImage {
                ...ResponsiveImageFragment
              }
            }
          }
          ... on SectionTextRecord {
            id
            text
            _modelApiKey
          }
          ... on SectionHeadlineRecord {
            id
            _modelApiKey
            text
          }
          ... on SectionCallToActionRecord {
            id
            elementType
            dropdownText {
              value
            }
            text
            openInNewTab
            _modelApiKey
          }
          ... on IconListRecord {
            id
            items {
              icon
              id
              text {
                value
              }
              title
              _modelApiKey
            }
          }
        }
        name
        _modelApiKey
      }
      productTeaser {
        content {
          ... on SectionCallToActionRecord {
            openInNewTab
            text
            elementType
            _modelApiKey
          }
          ... on SectionWithGradientBackgroundRecord {
            id
            backgroundColor
            _modelApiKey
            title
            image {
              responsiveImage {
                ...ResponsiveImageFragment
              }
            }
          }
        }
        name
      }
      seoTags {
        description
        title
      }
      slideshowSection {
        ...MoodSlideshowRecordFragment
      }
      socialFeedSection {
        subtitle
        title
        _modelApiKey
      }
      testimonialSection {
        _modelApiKey
        title
        subtitle
      }
    }
  }

  ${ResponsiveImageFragment}
  ${ProductInfoAccordionRecordFragment}
  ${NewsletterRecordFragment}
  ${MoodSlideShowFragment}
  
`

export default HOMEPAGE_QUERY
