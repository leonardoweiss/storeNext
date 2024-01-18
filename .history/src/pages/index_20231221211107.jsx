import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <h1 className='page-title'>HOME</h1>
        <section>
          <Image src="../images/home-img.png" height={500} width={50}/>
        </section>
      </main>
    </>
  )
}
