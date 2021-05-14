import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'

import { RecoilRoot } from 'recoil'

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
        <RecoilRoot>
          <Header />
          <Container className='mt-5'>
            <Component {...pageProps} />
          </Container>
        </RecoilRoot>
      </main>
    </>
  )
}

export default MyApp
