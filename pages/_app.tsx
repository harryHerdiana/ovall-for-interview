import React from 'react'
// import { useRouter } from "next/router";
import { AppProps } from 'next/app'
// import smoothscroll from "smoothscroll-polyfill";
// import "../styles/globals.css";
// import "slick-carousel/slick/slick.css";
// import "../styles/globals/slick.css";
import { StoreProvider } from '@context/StoreContext'
// import {
//   addPageviewAndOptimizeEvent,
//   setOriginalPageLocation,
// } from "../utils/tracking";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  // const router = useRouter();
  // const { asPath } = router || {};

  // useEffect(() => {
  //   // avoid double pageview events in SSG pages
  //   if (!asPath.includes('?')) {
  //     addPageviewAndOptimizeEvent()
  //   }
  //   router.events.on('routeChangeComplete', addPageviewAndOptimizeEvent)
  //   return () => {
  //     router.events.off('routeChangeComplete', addPageviewAndOptimizeEvent)
  //   }
  // }, [router.events])

  // useEffect(() => setOriginalPageLocation(), []);
  // useEffect(() => smoothscroll.polyfill());

  <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
)
export default MyApp
