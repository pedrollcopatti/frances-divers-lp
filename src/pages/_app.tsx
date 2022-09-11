import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/global.css'
import { MetaPixel } from '../components/MetaPixel'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MetaPixel/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
