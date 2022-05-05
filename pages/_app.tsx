import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

import '@fontsource/inter'
import '@fontsource/inter/600.css'
import '@fontsource/inter/900.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <Layout>
      <>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              color: '#fff',
              backgroundColor: '#374151',
            },
          }}
        />
        <Component {...pageProps} />
      </>
    </Layout>
  )
}

export default MyApp
