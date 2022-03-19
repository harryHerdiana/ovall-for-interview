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
          title
        }
        ... on FaqPageRecord {
          id
          slug
          title
        }
        ... on ProductRecord {
          id
          slug
          title
        }
        ... on RatingPageRecord {
          id
          slug
          title
        }
      }
      label
    }
    notification
  }
  socialFeedSection(locale: $locale) {
    subtitle
    title
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
            title
          }
          ... on FaqPageRecord {
            id
            slug
            title
          }
          ... on ProductRecord {
            id
            slug
            title
          }
          ... on RatingPageRecord {
            id
            slug
            title
          }
          ... on StaticPageRecord {
            id
            slug
            title
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
            title
          }
          ... on FaqPageRecord {
            id
            slug
            title
          }
          ... on ProductRecord {
            id
            slug
            title
          }
          ... on RatingPageRecord {
            id
            slug
            title
          }
          ... on StaticPageRecord {
            id
            slug
            title
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
