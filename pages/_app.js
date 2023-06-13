import Layout from '../components/Layout'
import Script from "next/script";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="Adsense-id" async onError={ (e) => { console.error('Script failed to load', e) }} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8126224721692056" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
