import { IStaticPage } from '@lib/types'
import * as utils from './utils'

export default function mapAboutUsData(d: any): IStaticPage {
  return {
    heroSection: {
      backgroundColor: utils.findByApiKey(
        d.heroSection,
        'section_with_gradient_background',
        'backgroundColor'
      ),
      title: utils.findByApiKey(d.heroSection, 'section_with_gradient_background', 'title'),
      text: utils.findByApiKey(d.heroSection, 'section_headline', 'text')
    },
    content: d.content
  }
}
