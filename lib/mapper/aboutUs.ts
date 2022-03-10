import { IAboutUsPage } from '@lib/types'
import * as utils from './utils'

export default function mapAboutUsData(d: any): IAboutUsPage {
  return {
    heroSection: utils.parseInfoBannerSection(d.heroSection),
    content: d.body,
    productTeaserSection: utils.parseProductTeaser(d.productTeaserSection),
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    },
    accordionSection: {
      items: d.accordionSection[0].items.map((item) => ({
        id: item.id,
        title: item.title,
        body: item.body,
        subtitle: item.subtitle
      }))
    }
  }
}
