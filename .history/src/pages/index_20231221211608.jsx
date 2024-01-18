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
          <Image 
            src="https://www.iplacecorp.com.br/file/general/hotsite-iplace-corp-distribuicao-image-min.png" 
            height={390} 
            width={600}
          />
        </section>
      </main>
    </>
  )
}
