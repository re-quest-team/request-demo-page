import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'

import '@fontsource/inter'
import '@fontsource/inter/600.css'
import '@fontsource/inter/900.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="h-full bg-black text-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  )
}

export default MyApp
