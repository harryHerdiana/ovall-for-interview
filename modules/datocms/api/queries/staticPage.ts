import { ResponsiveImageFragment } from '../fragments'

export const STATIC_PAGE_QUERY = `
  query getStaticPage($locale: SiteLocale!, $slug: String!) {
    staticPage(locale: $locale, filter: { slug: { eq: $slug }}) {
      slug
      seoTags {
        description
        title
      }
      title
      heroSection {
        ... on SectionTextRecord {
          id
          _modelApiKey
          text
        }
        ... on SectionWithGradientBackgroundRecord {
          id
          _modelApiKey
          backgroundColor
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 700, h: 400 }) {
              ...ResponsiveImageFragment
            }
          }
          title
        }
      }
      content {
        blocks
        links
        value
      }
    }
  }

  ${ResponsiveImageFragment}

`
