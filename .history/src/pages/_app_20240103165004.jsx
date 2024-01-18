import '@/styles/globals.css'
import CartC

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
