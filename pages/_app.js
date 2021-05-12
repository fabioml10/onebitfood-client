import Head from 'next/head'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      {/* Head pode existir em quanquer página */}
      <Head>
        <title>OneBitFood</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
