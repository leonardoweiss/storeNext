import '@/styles/globals.css'
import Cart

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
