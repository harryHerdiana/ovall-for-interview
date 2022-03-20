import { IRatingsPage } from '@lib/types'
import * as utils from './utils'

export default function mapRatingsData(d: any): IRatingsPage {
  return {
    heroSection: {
      ...utils.parseInfoBannerSection(d.heroSection),
      kicker: utils.findByApiKey(d.heroSection, 'section_headline', 'text')
    },
    productTeaserSection: utils.parseProductTeaser(d.productTeaser),
    productFeatureSection: {
      ...utils.parseInfoBannerSection(d.productFeatureSection.content),
      items: utils.findByApiKey(d.productFeatureSection.content, 'icon_list', 'items')
    },
    transparencySection: {
      kicker: utils.findByApiKey(d.transparencySection, 'section_headline', 'text'),
      title: utils.findByApiKey(d.transparencySection, 'section_subheadline', 'text'),
      text: utils.findByApiKey(d.transparencySection, 'section_text', 'text')
    },
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    }
  }
}
