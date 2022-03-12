import {
  HowToUseSectionFragment,
  MoodSlideShowFragment,
  NewsletterRecordFragment,
  ProductInfoAccordionRecordFragment,
  ProductInfoBannerFragment,
  ProductTeaserFragment,
  ResponsiveImageFragment
} from '@modules/datocms/api/fragments'

export const HOMEPAGE_QUERY = ` 
  query getHomePage($locale: SiteLocale!) {
    homepage(locale: $locale) {
      heroSection {
        ... on SectionCallToActionRecord {
          _modelApiKey
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
          _modelApiKey
          id
          title
          backgroundColor
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 500, h: 500 }) {
              ...ResponsiveImageFragment
            }
          }
        }
      }
      slideshowSection {
        ...MoodSlideshowRecordFragment
      }
      accordionSection {
        ...ProductInfoAccordionRecordFragment
      }
      howToUseSection {
        ...HowToUseSectionFragment
      }
      infoSection {
        ...ProductInfoBannerFragment
      }
      productInfoSection {
        ...ProductInfoBannerFragment
      }
      productTeaser {
        ...ProductTeaserFragment
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
      newsletterSection {
        ...NewsletterRecordFragment
      }
    }
  }

  ${ResponsiveImageFragment}
  ${ProductInfoAccordionRecordFragment}
  ${NewsletterRecordFragment}
  ${MoodSlideShowFragment}
  ${HowToUseSectionFragment}
  ${ProductInfoBannerFragment}
  ${ProductTeaserFragment}
  
`
