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
  i18n
}) => {
  const [showCookieBanner, setShowCookieBanner] = React.useState(false)

  const onCookieConfirmed = () => {
    trackCookieConsentGiven()

    fetch('/api/cookie', {}).then(() => {
      setShowCookieBanner(false)
    })
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

  const en = i18n?.en || `/en${router.pathname}`
  const de = i18n?.de || router.pathname.replace('en/', '')

  return (
    <>
      <Head>
        <TrackingScript />
        <title>{seoTags.title}</title>
        <meta name="description" content={seoTags.description} key="description" />
        <HrefLang en={en} de={de} />
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
