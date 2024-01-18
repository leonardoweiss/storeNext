import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>NextStore</title>
        <meta name="description" content="Loja fictícia para projeto Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
