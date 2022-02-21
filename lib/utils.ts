import currency from 'currency.js'

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

export const toEuro = (amount: number | string): string =>
  currency(amount, { symbol: '€', separator: '.', decimal: '.', pattern: '# !' }).format({
    decimal: ','
  })
