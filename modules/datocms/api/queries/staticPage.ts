export const STATIC_PAGE_QUERY = `
  query getStaticPage($locale: SiteLocale!, $title: String!) {
    staticPage(locale: $locale, filter: { title: { eq: $title }}) {
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
`
