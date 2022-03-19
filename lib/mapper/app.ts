import { ICartText, ICookieNotice, IFooter, IProductVariantImage, ITopMenu } from '@lib/types'
import { IColumnNavItem, IColumnTitle, IDatoFooter } from '@modules/datocms/types'

interface IData {
  topMenu: any
  footer: IDatoFooter
  cookieNotice: any
  cart: ICartText
  product: any
  socialFeedSection: any
}
export default function mapFooter(d: IData): {
  menu: ITopMenu
  footer: IFooter
  cookieNotice: ICookieNotice
  cart: ICartText
  variantImages: IProductVariantImage[]
  socialFeedSection: { title: string; subtitle }
} {
  const { footer, cookieNotice, topMenu, cart, product, socialFeedSection } = d
  return {
    menu: {
      notification: topMenu.notification,
      items: topMenu.items.map((item) => {
        const { slug, title } = item.internalLink
        return {
          id: item.id,
          label: item.label,
          path: slug.includes('ovall') ? `/products/${slug}` : `/${slug}`,
          title
        }
      })
    },
    socialFeedSection,
    variantImages: product.variantImages.map((variantImage) => ({
      id: variantImage.id,
      color: variantImage.color,
      background: null,
      image: variantImage.image[0].image.responsiveImage
    })),
    cookieNotice: {
      acceptText: cookieNotice.acceptButtonText,
      denyText: cookieNotice.denyButtonText,
      title: cookieNotice.title,
      text: cookieNotice.text,
      moreInfo: cookieNotice.moreInfo
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
            path: c.internalLink.slug.includes('ovall')
              ? `/products/${c.internalLink.slug}`
              : `/${c.internalLink.slug}`,
            label: c.label,
            title: c.internalLink.title
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
            path: c.internalLink.slug.includes('ovall')
              ? `/products/${c.internalLink.slug}`
              : `/${c.internalLink.slug}`,
            label: c.label,
            title: c.internalLink.title
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
