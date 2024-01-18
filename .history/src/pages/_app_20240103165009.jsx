import '@/styles/globals.css'
import { cartContextProvider } from '@/hooks/useCart'

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvide>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}
