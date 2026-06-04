'use client'

import Script from 'next/script'

export function TrackingScripts() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '560364541162966');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=560364541162966&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <Script
        id="ga4"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=GA4_MEASUREMENT_ID"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA4_MEASUREMENT_ID');
      `}</Script>
      <Script id="hyros" strategy="afterInteractive">{`
        !function(){
          var e=document.createElement('script');
          e.type='text/javascript';e.async=true;
          e.src='https://t.hyros.com/v1/static/lnk.js';
          e.setAttribute('data-id','HYROS_SNIPPET_ID');
          document.head.appendChild(e);
        }();
      `}</Script>
    </>
  )
}
