import { ICookieNotice, IFooter } from '@lib/types'
import { IColumnNavItem, IColumnTitle, IDatoFooter } from '@modules/datocms/types'

interface IData {
  footer: IDatoFooter
  cookieNotice: any
}
export default function mapFooter(d: IData): { footer: IFooter; cookieNotice: ICookieNotice } {
  const { footer, cookieNotice } = d
  return {
    cookieNotice: {
      acceptText: cookieNotice.acceptButtonText,
      denyText: cookieNotice.denyButtonText,
      title: cookieNotice.title,
      text: cookieNotice.text
    },
    footer: {
      leftColumn: {
        title: (
          footer.leftColumn.find((c) => c._modelApiKey === 'section_headline') as IColumnTitle
        ).text,
        items: footer.leftColumn
          .filter((c) => c._modelApiKey === 'navigation_link')
          .map((c: IColumnNavItem) => ({
            id: c.id,
            path: c.internalLink.slug,
            label: c.label
          }))
      },
      middleColumn: {
        title: (
          footer.middleColumn.find((c) => c._modelApiKey === 'section_headline') as IColumnTitle
        ).text,
        items: footer.middleColumn
          .filter((c) => c._modelApiKey === 'navigation_link')
          .map((c: IColumnNavItem) => ({
            id: c.id,
            path: c.internalLink.slug,
            label: c.label
          }))
      },
      rightColumn: {
        facebook: footer.facebook,
        instagram: footer.instagram,
        pinterest: footer.pinterest,
        youtube: footer.youtube,
        title: footer.followUsTitle,
        text: footer.followUsText
      }
    }
  }
}
