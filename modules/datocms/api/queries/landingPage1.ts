import {
  ResponsiveImageFragment,
  ProductInfoBannerFragment,
  ProductTeaserFragment
} from '@modules/datocms/api/fragments'

export const LANDING_PAGE1_QUERY = ` 
  query getLandingPage($locale: SiteLocale!) {
    landingpage(locale: $locale) {
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
        ... on SectionCallToActionRecord {
          openInNewTab
          text
          elementType
          _modelApiKey
        }
      }
      slideshow {
        name
        images {
          responsiveImage(imgixParams: {fm: jpg, fit: max, w: 500, h: 500, mask:corners, cornerRadius:"25,25,25,25" }) {
            ...ResponsiveImageFragment
          }
        }
      }
      porenbanner {
        ...ProductInfoBannerFragment
      }
      reviewsCarousal {
        subtitle
        title
      }
      productpreview {
        ...ProductTeaserFragment
      }
      skinTypeInfoSection {
        ... on SectionWithGradientBackgroundRecord {
          id
          title
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 400 }) {
              ...ResponsiveImageFragment
            }
          }
          backgroundColor
          _modelApiKey
        }
        ... on SectionTextRecord {
          id
          text
          _modelApiKey
        }
      }
      featuresBanner {
        ...ProductInfoBannerFragment
      }
    }
  }

  ${ResponsiveImageFragment}
  ${ProductInfoBannerFragment}
  ${ProductTeaserFragment}
`
