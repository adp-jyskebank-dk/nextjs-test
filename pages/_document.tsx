import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const initGtag = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        config: 'AW-11185102926',
        js: new Date(),
      })
    }
  }
  return (
    <Html lang="en">
      <Head>
        <Script async src='https://www.googletagmanager.com/gtag/js?id=AW-11185102926' onLoad={initGtag} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
