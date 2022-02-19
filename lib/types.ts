import { Languages } from './enums'

export type Language = Languages.English | Languages.German

export type Context = {
  locales?: string[]
  locale?: string
  defaultLocale?: string
}
