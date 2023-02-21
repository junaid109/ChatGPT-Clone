import Head from 'next/head'
import { Global } from '@emotion/react'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
