import { IHomePage } from '@lib/types'
// import { IDatoHomepage } from '@modules/datocms/types'
import * as utils from './utils'

export default function mapHomepageData(d: any): IHomePage {
  return {
    heroSection: utils.parseInfoBannerSection(d.heroSection),
    moodSlideshowSection: {
      kicker: d.slideshowSection.header,
      title: d.slideshowSection.subheader,
      items: d.slideshowSection.images.map((item) => ({
        id: item.id,
        title: item.captionHeader,
        text: item.captionText,
        image: item.imageWithGradient[0].image.responsiveImage,
        background: item.imageWithGradient[0].gradientBackground || null
      }))
    },
    infoSection: utils.parseProductInfoBannerTech(d.infoSection),
    productInfoBannerTechnology: utils.parseProductInfoBannerTech(d.productInfoSection),
    productInfoAccordionSection: {
      buttonText: d.accordionSection.buttonText,
      items: d.accordionSection.items
    },
    howToUseSection: {
      title: d.howToUseSection.header,
      items: d.howToUseSection.items.map((item) => ({
        id: item.id,
        title: item.header,
        description: item.description,
        image: item.image[0]?.image.responsiveImage
      }))
    },
    productTeaserSection: utils.parseProductTeaser(d.productTeaser),
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    }
  }
}
