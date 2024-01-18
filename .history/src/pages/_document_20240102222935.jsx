import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>NextStore</title>
        <meta name="description" content="Loja fictícia para projeto Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/fcba8eb07f.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        {/* <Header /> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
