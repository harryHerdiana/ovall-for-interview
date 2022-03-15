import { ResponsiveImageFragment } from '../fragments'

export const APP_QUERY = `
query getFooter($locale: SiteLocale!) {
  topMenu(locale: $locale) {
    id
    items {
      id
      internalLink {
        ... on AboutUsPageRecord {
          id
          slug
        }
        ... on FaqPageRecord {
          id
          slug
        }
        ... on ProductRecord {
          id
          slug
        }
        ... on RatingPageRecord {
          id
          slug
        }
      }
      label
    }
    notification
  }
  cookieNotice(locale: $locale) {
    denyButtonText
    title
    text {
      value
      links {
        id
        title
        slug
      }
    }
    acceptButtonText
    moreInfo
  }
  product(locale: $locale) {
    variantImages {
      id
      color
      image {
        image {
          responsiveImage(imgixParams: {fm: jpg, fit: fillmax, w: 200, h: 200 }) {
            ...ResponsiveImageFragment
          }
        }
      }
    }
  }
  cart(locale: $locale) {
    cartEmpty
    buttonText
    cartName
    closeCart
    taxInfo
    total
  }
  footer(locale: $locale) {
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
            id
            slug
          }
          ... on FaqPageRecord {
            id
            slug
          }
          ... on ProductRecord {
            id
            slug
          }
          ... on RatingPageRecord {
            id
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
            id
            slug
          }
          ... on FaqPageRecord {
            id
            slug
          }
          ... on ProductRecord {
            id
            slug
          }
          ... on RatingPageRecord {
            id
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

${ResponsiveImageFragment}
`
