export const FOOTER_QUERY = `
query getFooter {
  footer {
    facebook
    youtube
    pinterest
    instagram
    followUsText
    followUsTitle
    leftColumn {
      ... on NavigationLinkRecord {
        _modelApiKey
        id
        label
        externalLink
        internalLink {
          ... on AboutUsPageRecord {
            slug
          }
          ... on StaticPageRecord {
            slug
          }
          ... on FaqPageRecord {
            slug
          }
        }
      }
      ... on SectionHeadlineRecord {
        id
        _modelApiKey
        text
      }
    }
    middleColumn {
      ... on NavigationLinkRecord {
        _modelApiKey
        id
        externalLink
        internalLink {
          ... on AboutUsPageRecord {
            slug
          }
          ... on StaticPageRecord {
            slug
          }
          ... on FaqPageRecord {
            slug
          }
        }
        label
      }
      ... on SectionHeadlineRecord {
        id
        _modelApiKey
        text
      }
    }

  }
}
`
