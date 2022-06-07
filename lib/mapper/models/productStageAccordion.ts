import { DatoProductStageAccordion } from '@modules/datocms/types'
import { IProductStageAccordion } from '@component/ProductStage/ProductStageAccordion'

export default function mapComponent(d: DatoProductStageAccordion): IProductStageAccordion {
  return {
    items: d.items.map((item) => ({
      id: item.id,
      text: item.text,
      image: item.image?.responsiveImage || null,
      subItems: item.items.map((subItem) => ({
        id: subItem.id,
        heading: subItem.title,
        body: subItem.text
      }))
    }))
  }
}
