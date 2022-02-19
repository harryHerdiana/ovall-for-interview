export function mapLocaleString(locale: string): string {
  switch (locale) {
    case 'de-DE':
      return 'de'
    default:
      return locale
  }
}
