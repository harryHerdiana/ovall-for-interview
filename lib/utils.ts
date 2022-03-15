import currency from 'currency.js'

const isBrowser = typeof window !== `undefined`

export function mapLocaleString(locale: string): string {
  switch (locale) {
    case 'de-DE':
      return 'de'
    case 'en':
      return 'en'
    default:
      // console.warn(`Unsupported language: ${locale}`)
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

export const appUrl = (): string => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    case 'staging':
      return 'https://staging.ovallskincare.de/'
    case 'production':
      return 'https://ovallskincare.de/'
    default:
      return `http://localhost:${process.env.PORT || '3000'}`
  }
}
