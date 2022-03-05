import { IHomePage } from '@lib/types'
import { IDatoHomepage } from '@modules/datocms/types'

export default function mapProductPageData(d: IDatoHomepage): IHomePage {
  return {
    heroSection: {},
    howToUseSection: {
      title: d.howToUseSection.header,
      items: d.howToUseSection.items.map((item) => ({
        id: item.id,
        title: item.header,
        description: item.description,
        image: item.image[0]?.image.responsiveImage
      }))
    },
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    }
  }
}
