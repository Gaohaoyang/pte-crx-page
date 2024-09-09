import { useEffect } from 'react'

const AdSenseAd = () => {
  useEffect(() => {
    // Inject the script tag for adsbygoogle
    const script = document.createElement('script')
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139027259917346'
    script.async = true
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    // Initialize adsbygoogle
    try {
      // @ts-expect-error window
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense error: ', e)
    }

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script)
    }
  }, []) // The empty dependency array ensures this runs only once

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9139027259917346"
      data-ad-slot="8680029933"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdSenseAd
