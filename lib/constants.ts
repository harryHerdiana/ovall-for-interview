export const LOCALSTORAGE_CHECKOUT_KEY = 'shopify_checkout_id'
export const BRAND_NAME = 'ovallskincare'
export const ALL_PRODUCTS_PATH = '/products/ovall-all'
export const PRODUCT_PATH = '/products/ovall-ultraschall-gesichtsreiniger'
export const CLEANSER_PRODUCT_PATH = '/products/ovall-aloe-face-cleansing-gel'
export const PRODUCT_BUNDLE_PATH = '/products/ovall-aloe-face-cleansing-gel-bundle'

export const SHOPIFY_PRODUCT_HANDLE = 'ovall-ultraschall-gesichtsreiniger'
export const SHOPIFY_CLEANSING_PRODUCT_HANDLE = 'ovall-aloe-face-cleansing-gel'
export const SHOPIFY_BUNDLE_HANDLE = 'ovall-aloe-face-cleansing-gel-bundle'

export const FREE_SHIPPING_THRESHOLD = 45
export const SHIPPING_COSTS = 4.9

const staticPages = [
  {
    en: 'imprint',
    'de-DE': 'impressum'
  },
  {
    en: 'widerruf',
    'de-DE': 'widerrufsbelehrung'
  },
  {
    en: 'shipping',
    'de-DE': 'versand'
  },
  {
    en: 'agb',
    'de-DE': 'agb'
  },
  {
    en: 'payment-options',
    'de-DE': 'zahlungsmoglichkeiten'
  },
  {
    en: 'contact',
    'de-DE': 'kontakt'
  },
  {
    en: 'privacy',
    'de-DE': 'datenschutz'
  }
]

export const STATIC_PAGE_PATHS = staticPages.flatMap((page) => [
  { params: { staticPage: page.en }, locale: 'en' },
  { params: { staticPage: page['de-DE'] }, locale: 'de-DE' }
])

export const STATIC_PAGE_I18N = staticPages.reduce((map, page) => {
  const paths = {
    en: `/en/${page.en}`,
    de: `/${page['de-DE']}`
  }
  return {
    ...map,
    [page.en]: paths,
    [page['de-DE']]: paths
  }
}, {})
