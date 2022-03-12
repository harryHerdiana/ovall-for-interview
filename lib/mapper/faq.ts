import { IFAQPage } from '@lib/types'
import * as utils from './utils'

export default function mapAboutUsData(d: any): IFAQPage {
  return {
    heroSection: {
      ...utils.parseInfoBannerSection(d.heroSection),
      kicker: utils.findByApiKey(d.heroSection, 'section_headline', 'text')
    },
    faqSection: {
      items: d.faqAccordion.items.map((item) => ({
        id: item.id,
        text: item.text,
        body: item.body
      })),
      buttonText: d.buttonText
    },
    descriptionSection: {
      videoUrl: d.youtubeUrl
    },
    productTeaserSection: utils.parseProductTeaser(d.productTeaser),
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    }
  }
}
