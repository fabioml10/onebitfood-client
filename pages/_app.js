import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
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
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}

export default MyApp
