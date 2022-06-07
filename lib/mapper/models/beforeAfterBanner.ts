import { DatoCMSBeforeAfterBanner } from '@modules/datocms/types'
import { IBeforeAfterBannerProps } from '@component/BeforeAfterBanner'

export default function mapComponent(d: DatoCMSBeforeAfterBanner): IBeforeAfterBannerProps {
  return {
    kicker: d.kicker,
    title: d.title,
    backgroundColor: d.backgroundColor,
    disclaimer: d.disclaimer,
    items: d.items.map((item) => ({
      id: item.id,
      percentage: item.title,
      text: item.text
    })),
    image: d.image.responsiveImage
  }
}
