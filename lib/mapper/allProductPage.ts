import { IAllProductPage } from '@lib/types'
import * as utils from './utils'

export default function mapAllProductData(d: any): IAllProductPage {
  return {
    productImages: d.productImages.map((variantImage) => ({
      id: variantImage.color,
      color: variantImage.color,
      background: variantImage.image[0].gradientBackground,
      image: variantImage.image[0].image?.responsiveImage || null
    })),
    heroSection: utils.parseInfoBannerSection(d.heroSection),
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    },
    testimonialSection: {
      kicker: d.testimonialSection.title,
      title: d.testimonialSection.subtitle
    }
  }
}
