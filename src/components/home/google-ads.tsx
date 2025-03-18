'use client'

import React from 'react'

const GoogleAds = () => {
  return (
    <div
      className="mt-32"
      dangerouslySetInnerHTML={{
        __html: `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139027259917346"
     crossorigin="anonymous"></script>
<!-- pte-crx-page-row -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9139027259917346"
     data-ad-slot="8680029933"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `,
      }}
    ></div>
  )
}

export default GoogleAds
