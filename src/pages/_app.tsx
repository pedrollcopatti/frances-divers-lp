import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/global.css'
import { MetaPixel } from '../components/homepage/MetaPixel'
import Fonts from '../components/homepage/jornada/Fonts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <MetaPixel/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
