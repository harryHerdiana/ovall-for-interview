import { IFooter } from '@lib/types'
import { IColumnNavItem, IColumnTitle, IDatoFooter } from '@modules/datocms/types'

export default function mapFooter(d: IDatoFooter): IFooter {
  return {
    leftColumn: {
      title: (d.leftColumn.find((c) => c._modelApiKey === 'section_headline') as IColumnTitle).text,
      items: d.leftColumn
        .filter((c) => c._modelApiKey === 'navigation_link')
        .map((c: IColumnNavItem) => ({
          id: c.id,
          path: c.internalLink.slug,
          label: c.label
        }))
    },
    middleColumn: {
      title: (d.middleColumn.find((c) => c._modelApiKey === 'section_headline') as IColumnTitle)
        .text,
      items: d.middleColumn
        .filter((c) => c._modelApiKey === 'navigation_link')
        .map((c: IColumnNavItem) => ({
          id: c.id,
          path: c.internalLink.slug,
          label: c.label
        }))
    },
    rightColumn: {
      facebook: d.facebook,
      instagram: d.instagram,
      pinterest: d.pinterest,
      youtube: d.youtube,
      title: d.followUsTitle,
      text: d.followUsText
    }
  }
}
