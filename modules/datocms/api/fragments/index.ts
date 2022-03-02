export const ProductInfoAccordionRecordFragment = `
  fragment ProductInfoAccordionRecordFragment on ProductInfoAccordionRecord {
    id
    buttonText
    items {
      body
      text
      id
    }
    name
  }
`

export const ResponsiveImageFragment = `
  fragment ResponsiveImageFragment on ResponsiveImage {
    srcSet
    src
    title
    width
    height
    sizes
    base64
    alt
    aspectRatio
    webpSrcSet
  }
`

export const NewsletterRecordFragment = `
  fragment NewsletterRecordFragment on NewsletterSectionRecord {
    name
    placeholder
    subheader
    title
    disclaimer {
      value
    }
    description {
      value
    }
    buttonText
  }
`

export const MoodSlideShowFragment = `
  fragment MoodSlideshowRecordFragment on MoodSlideshowRecord {
    _modelApiKey
    header
    name
    subheader
    images {
      captionHeader
      captionText
      id
      imageWithGradient {
        gradientBackground
        image {
          responsiveImage {
            ...ResponsiveImageFragment
          }
        }
      }
    }
  }
`
export const ProductInfoBannerFragment = `
  fragment ProductInfoBannerFragment on ProductInfoBannerRecord {
    _modelApiKey
    content {
      ... on SectionWithGradientBackgroundRecord {
        _modelApiKey
        backgroundColor
        title
        image {
          responsiveImage(imgixParams: {fm: jpg, fit: clip, w: 600, h: 384 }) {
            ...ResponsiveImageFragment
          }
        }
      }
      ... on SectionTextRecord {
        _modelApiKey
        text
      }
      ... on SectionHeadlineRecord {
        _modelApiKey
        text
      }
      ... on SectionCallToActionRecord {
        _modelApiKey
        id
        text
        openInNewTab
        elementType
        dropdownText {
          value
        }
      }
    }
  }
`

export const HowToUseSectionFragment = `
  fragment HowToUseSectionFragment on HowToUseRecord {  
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
`
