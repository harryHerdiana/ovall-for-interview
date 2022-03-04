import React from 'react'

const TrackingScript: React.FC = () => {
  if (process.env.NEXT_PUBLIC_DISABLE_TRACKING) {
    return <meta />
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://collect.ovallskincare.de/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P5QB2N9');
        `
      }}
      key="gtm"
    />
  )
}

export default TrackingScript
