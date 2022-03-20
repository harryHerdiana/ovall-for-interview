import React from 'react'
import Head from 'next/head'
import { CookieSerializeOptions, serialize } from 'cookie'
import {
  SeoTags,
  IFooter,
  ICookieNotice,
  ITopMenu,
  ICartText,
  IProductVariantImage
} from '@lib/types'
import Header from '@component/Layout/Header'
import { TrackingIframe, TrackingScript } from '@modules/tracking'
import CookieBanner from '@component/CookieBanner'
import { trackCookieConsentGiven } from '@modules/tracking/events'
import HrefLang from '@component/HrefLang'
import { useRouter } from 'next/router'
import Footer from './Footer'

interface ILayout {
  seoTags: SeoTags
  children: React.ReactElement[]
  menu: ITopMenu
  cookieNotice: ICookieNotice
  footer: IFooter
  cart: ICartText
  variantImages: IProductVariantImage[]
  i18n?: {
    en: string
    de: string
  }
  indexable?: boolean
}

const COOKIE_PREFIX = '_ovallskincare'

const getCookies = () =>
  document.cookie.split(';').reduce((res, c) => {
    const [key, val] = c.trim().split('=').map(decodeURIComponent)
    try {
      return Object.assign(res, { [key]: JSON.parse(val) })
    } catch (e) {
      return Object.assign(res, { [key]: val })
    }
  }, {})

const setNoConsentCookie = () => {
  const options: CookieSerializeOptions = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    secure: true,
    path: '/'
  }

  document.cookie = serialize(COOKIE_PREFIX, `no-consent`, options)
}

const Layout: React.FC<ILayout> = ({
  seoTags,
  menu,
  cart,
  children,
  footer,
  cookieNotice,
  variantImages,
  i18n,
  indexable = true
}) => {
  const [showCookieBanner, setShowCookieBanner] = React.useState(false)

  const onCookieConfirmed = () => {
    trackCookieConsentGiven()
    setShowCookieBanner(false)

    fetch('/api/cookie')
  }

  const onCookieDeclined = () => {
    setNoConsentCookie()
    setShowCookieBanner(false)
  }

  React.useEffect(() => {
    const cookies = getCookies()

    if (COOKIE_PREFIX in cookies === false) {
      setShowCookieBanner(true)
    }
  })
  const router = useRouter()

  const canonicalURL = `https://ovallskincare.de${useRouter().asPath}`

  const en = i18n?.en || `/en${router.pathname}`
  const de = i18n?.de || router.pathname.replace('en/', '')

  return (
    <>
      <Head>
        <TrackingScript />
        <title>{seoTags.title}</title>
        <meta name="description" content={seoTags.description} key="description" />
        <HrefLang en={en} de={de} />
        <meta
          name="robots"
          content={
            indexable === true && process.env.NEXT_PUBLIC_INDEX !== 'false'
              ? 'index,follow'
              : 'noindex,follow'
          }
          key="robots"
        />
        <meta name="revisit-after" content="3 days" key="revisit_after" />

        <link rel="canonical" href={canonicalURL} />
        <link rel="apple-touch-icon" sizes="57x57" href="../../favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../../favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../../favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../../favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../../favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../../favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../../favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../../favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../../favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../../favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="../../favicon/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../../images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../../favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="../../images/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <TrackingIframe />
      <div className="flex flex-col font-main">
        <Header menu={menu} cart={cart} variantImages={variantImages} />
        <main className="flex-grow font-main mt-8 sm:mt-12 xl:mt-0">{children}</main>
      </div>
      {showCookieBanner && (
        <CookieBanner
          onConfirm={onCookieConfirmed}
          onDecline={onCookieDeclined}
          {...cookieNotice}
        />
      )}

      <Footer {...footer} />
    </>
  )
}

export default Layout
