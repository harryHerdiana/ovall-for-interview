import { pushToDatalayer } from './utils'

export const trackCookieConsentGiven = (): void => {
  pushToDatalayer({
    event: 'consent_given'
  })
}

// for Videos
export const trackLoaded = (): void => {
  pushToDatalayer({
    event: 'gtm.load'
  })
}

export const addPageviewAndOptimizeEvent = (): void => {
  pushToDatalayer({
    event: 'optimize.event'
  })
  // fix delayed title update https://github.com/nfl/react-helmet/issues/189
  setTimeout(() => pushToDatalayer({ event: 'pageview' }), 100)
}

export const setOriginalPageLocation = (): void => {
  // see ghost referral issue in UA
  // https://www.simoahava.com/gtm-tips/fix-rogue-referral-problem-single-page-sites/
  pushToDatalayer({
    originalPageLocation:
      document.location.origin + document.location.pathname + document.location.search
  })
}
