import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-zinc-900">
      <Head>
        <script
          async
          defer
          data-website-id="841fe53d-0f98-4373-a901-76a9337432fe"
          src="https://umami-eta-one.vercel.app/umami.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
