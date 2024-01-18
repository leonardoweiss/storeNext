import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header
      <main>
        <h2>HOME</h2>
        <Link href="/products">products</Link>
      </main>
    </>
  )
}
