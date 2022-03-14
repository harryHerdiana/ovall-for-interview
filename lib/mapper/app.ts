import { ICartText, ICookieNotice, IFooter, ITopMenu } from '@lib/types'
import { IColumnNavItem, IColumnTitle, IDatoFooter } from '@modules/datocms/types'

interface IData {
  topMenu: any
  footer: IDatoFooter
  cookieNotice: any
  cart: ICartText
}
export default function mapFooter(d: IData): {
  menu: ITopMenu
  footer: IFooter
  cookieNotice: ICookieNotice
  cart: ICartText
} {
  const { footer, cookieNotice, topMenu, cart } = d
  return {
    menu: {
      notification: topMenu.notification,
      items: topMenu.items.map((item) => {
        const { slug } = item.internalLink
        return {
          id: item.id,
          label: item.label,
          path: slug.includes('ovall') ? `/products/${slug}` : `/${slug}`
        }
      })
    },
    cookieNotice: {
      acceptText: cookieNotice.acceptButtonText,
      denyText: cookieNotice.denyButtonText,
      title: cookieNotice.title,
      text: cookieNotice.text
    },
    cart,
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
