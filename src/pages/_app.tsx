import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/assets/icon-512.png" />
        <link rel="icon" href="/assets/icon-128.png" />
        <link rel="shortcut" href="/assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A complete project structure to create React web applications using NextJS and Typescript"
        />
        <title>NextJS Template</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
