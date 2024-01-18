import '@/styles/globals.css'
import { CartContextProvider } from '@/hooks/useCart'

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
