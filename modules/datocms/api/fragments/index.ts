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
