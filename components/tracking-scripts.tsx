'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

type TrackingConsent = 'pending' | 'granted' | 'withheld'

function hasGlobalPrivacyControl() {
  if (typeof navigator === 'undefined') return false
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
}

export function TrackingScripts() {
  const [consent, setConsent] = useState<TrackingConsent>('pending')

  useEffect(() => {
    setConsent(hasGlobalPrivacyControl() ? 'withheld' : 'granted')
  }, [])

  if (consent !== 'granted') return null

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
        var head = document.head;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://212493.t.hyros.com/v1/lst/universal-script?ph=9d1e5614f8f08d8d750f7ede39d1f8014cf648f5f6ae8e43ca5775eb101eb3d4&tag=!clicked&ref_url=" + encodeURI(document.URL);
        head.appendChild(script);
      `}</Script>
      <Script id="retention-com" strategy="afterInteractive">{`
        !function(){var geq=window.geq=window.geq||[];if(geq.initialize) return;if (geq.invoked){if (window.console && console.error) {console.error("GE snippet included twice.");}return;}geq.invoked = true;geq.methods = ["page", "suppress", "track", "doNotTrack", "trackOrder", "identify", "addToCart", "callBack", "event"];geq.factory = function(method){return function(){var args = Array.prototype.slice.call(arguments);args.unshift(method);geq.push(args);return geq;};};for (var i = 0; i < geq.methods.length; i++) {var key = geq.methods[i];geq[key] = geq.factory(key);} geq.load = function(key){var script = document.createElement("script");script.type = "text/javascript";script.async = true; if (location.href.includes("vge=true")) {script.src = "https://s3-us-west-2.amazonaws.com/jsstore/a/" + key + "/ge.js?v=" + Math.random();} else {script.src = "https://s3-us-west-2.amazonaws.com/jsstore/a/" + key + "/ge.js";} var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};geq.SNIPPET_VERSION = "1.6.1";
        geq.load("K97HQJ0Y");}();
      `}</Script>
    </>
  )
}
