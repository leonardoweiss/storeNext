import '@/styles/globals.css'
import { cartContextProvider } from '@/hooks/useCart'

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </cartContextProvider>
  )
}
