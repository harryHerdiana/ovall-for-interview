import React from 'react'
import Head from 'next/head'
import { SeoTags, IFooter, ICookieNotice, ITopMenu } from '@lib/types'
import Header from '@component/Layout/Header'
import { TrackingIframe, TrackingScript } from '@modules/tracking'
import CookieBanner from '@component/CookieBanner'
import Footer from './Footer'

interface ILayout {
  seoTags: SeoTags
  children: React.ReactElement[]
  menu: ITopMenu
  cookieNotice: ICookieNotice
  footer: IFooter
}

const Layout: React.FC<ILayout> = ({ seoTags, menu, children, footer, cookieNotice }) => {
  const [showCookieBanner, setShowCookieBanner] = React.useState(false)

  const onCookieConfirmed = () => {
    // trackCookieConsentGiven()

    // fetch('/api/cookie', {}).then(() => {
    setShowCookieBanner(false)
    // })
  }

  const onCookieDeclined = () => {
    // setNoConsentCookie()
    setShowCookieBanner(false)
  }

  React.useEffect(() => {
    // check if cookie exists
    // const cookies = getCookies()

    // if (COOKIE_PREFIX in cookies === false) {
    setShowCookieBanner(false)
    // }
  })

  return (
    <>
      <Head>
        <TrackingScript />
        <title>{seoTags.title}</title>
        <meta name="description" content={seoTags.description} key="description" />
      </Head>
      <TrackingIframe />
      <div className="flex flex-col font-main">
        <Header menu={menu} />
        <main className="flex-grow font-main">{children}</main>
      </div>

      {showCookieBanner ? (
        <CookieBanner
          onConfirm={onCookieConfirmed}
          onDecline={onCookieDeclined}
          {...cookieNotice}
        />
      ) : (
        <></>
      )}

      <Footer {...footer} />
    </>
  )
}

export default Layout
