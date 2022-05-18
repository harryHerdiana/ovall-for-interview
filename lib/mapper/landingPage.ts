import { ILandingPage } from '@lib/types'
import * as utils from './utils'

export default function mapLandingPage(d: any): ILandingPage {
  console.log('D', d)
  return {
    slideshow: d.slideshow.images.map((item) => item.responsiveImage),
    heroSection: utils.parseInfoBannerSection(d.heroSection),
    porenBanner: utils.parseInfoBannerSection(d.porenbanner.content),
    testimonialSection: {
      kicker: d.reviewsCarousal.title,
      title: d.reviewsCarousal.subtitle
    },
    productTeaserSection: utils.parseProductTeaser(d.productpreview),
    skinTypeInfoSection: {
      backgroundColor: utils.findByApiKey(
        d.skinTypeInfoSection,
        'section_with_gradient_background',
        'backgroundColor'
      ),
      image: utils.findByApiKey(d.skinTypeInfoSection, 'section_with_gradient_background', 'image')
        ?.responsiveImage,
      title: utils.findByApiKey(d.skinTypeInfoSection, 'section_with_gradient_background', 'title'),
      body: utils.findByApiKey(d.skinTypeInfoSection, 'section_text', 'text')
    },
    productInfoBannerFeatures: {
      ...utils.parseInfoBannerSection(d.featuresBanner.content),
      items: utils.findByApiKey(d.featuresBanner.content, 'icon_list', 'items')
    }
  }
}
