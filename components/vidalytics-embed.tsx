'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  embedId: string
  accountId: string
  /** Tailwind classes on the outer wrapper — use max-w-* or w-* to control display size. */
  className?: string
  /** Padding-top percentage for aspect ratio. Default 56.25% = 16:9. */
  aspectRatio?: `${number}%`
}

export function VidalyticsEmbed({
  embedId,
  accountId,
  className,
  aspectRatio = '56.25%',
}: Props) {
  const containerId = `vidalytics_embed_${embedId}`

  useEffect(() => {
    const src = `https://fast.vidalytics.com/embeds/${accountId}/${embedId}/`
    if (document.getElementById(`vidalytics-script-${embedId}`)) return

    const s = document.createElement('script')
    s.id = `vidalytics-script-${embedId}`
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function (v, i, d, a, l, y, t, c, s) {
      y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
      if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
      };}
      vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
    })(window, document, 'Vidalytics', '${containerId}', '${src}');`
    document.head.appendChild(s)
  }, [embedId, accountId, containerId])

  return (
    <div className={cn('min-w-0 max-w-full overflow-hidden rounded-xl', className)}>
      <div
        id={containerId}
        className="max-w-full [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:rounded-xl"
        style={{ width: '100%', position: 'relative', paddingTop: aspectRatio }}
      />
    </div>
  )
}
