import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
      <Head>
        <title>Internet place</title>
        <meta name="description" content="Lorenzo Michelotti portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
  </ChakraProvider> 
}

export default MyApp
