import React from 'react'

const TrackingIframe: React.FC = () => (
  <>
    {!process.env.NEXT_PUBLIC_DISABLE_TRACKING && (
      <noscript>
        <iframe
          src="https://connect.ovallskincare.de/ns.html?id=GTM-5TWMXQS"
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
