const isBrowser = typeof window !== `undefined`

export function mapLocaleString(locale: string): string {
  switch (locale) {
    case 'de-DE':
      return 'de'
    case 'en':
      return 'en'
    default:
      console.warn(`Unsupported language: ${locale}`)
      return 'de'
  }
}

export function setLocalStorageSafe(key: string, value: string): void {
  if (isBrowser) {
    localStorage.setItem(key, value)
  }
}
