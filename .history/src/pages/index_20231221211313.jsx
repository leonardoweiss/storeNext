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
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692971740452" 
            height={300}
          />
        </section>
      </main>
    </>
  )
}
