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
        <Header />
        <Container className='mt-5'>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Container>
      </main>
    </>
  )
}

export default MyApp
