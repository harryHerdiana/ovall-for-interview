import React from 'react'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import smoothscroll from 'smoothscroll-polyfill'
import '@styles/globals.css'
import 'slick-carousel/slick/slick.css'
import '../styles/globals/slick.css'
import { StoreProvider } from '@context/StoreContext'
import { addPageviewAndOptimizeEvent, setOriginalPageLocation } from '@modules/tracking/events'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const { asPath } = router || {}

  React.useEffect(() => {
    if (!asPath.includes('?')) {
      addPageviewAndOptimizeEvent()
    }
    router.events.on('routeChangeComplete', addPageviewAndOptimizeEvent)
    return () => {
      router.events.off('routeChangeComplete', addPageviewAndOptimizeEvent)
    }
  }, [router.events])

  React.useEffect(() => setOriginalPageLocation(), [])
  React.useEffect(() => smoothscroll.polyfill())
  return (
    <StoreProvider locale={router.locale} shopifyProduct={pageProps.shopifyProduct}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
export default appWithTranslation(MyApp)
