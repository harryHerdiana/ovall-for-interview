import React from 'react'

const TrackingIframe: React.FC = () => (
  <>
    {!process.env.NEXT_PUBLIC_DISABLE_TRACKING && (
      <noscript>
        <iframe
          src="https://collect.ovallskincare.de/ns.html?id=GTM-P5QB2N9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    )}
  </>
)

export default TrackingIframe
