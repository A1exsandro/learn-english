import Layout from '@/components/layout'
import { WordsProvider } from '@/contexts/Words'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Layout>
        <WordsProvider>
          <Component {...pageProps} />
        </WordsProvider>
      </Layout>
    </MantineProvider>
  )
}
