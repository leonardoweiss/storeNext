import '@/styles/globals.css'
impo

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
