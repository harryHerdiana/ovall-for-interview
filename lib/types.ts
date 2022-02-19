import { Languages } from './enums'

export type Language = Languages.English | Languages.German

export type Context = {
  locales?: string[]
  locale?: string
  defaultLocale?: string
}

export type SeoTags = {
  description: string
  title: string
  imageUrl?: string
}

export type MenuItem = {
  path: string
}

export type IMenu = MenuItem[]

export interface IPageProps {
  seoTags: SeoTags
  menu: IMenu
}
