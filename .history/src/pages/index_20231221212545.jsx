import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        <section id='section-home'>
          <article>
            <h1>NextStore</h1>
            <p>Os melhores produtos da "Maçã", você acha aqui!</p>
            <Link href="">
              <button type="button">Começar a comprar</button>
            </Link>
          </article>
          <Image 
            src="https://www.iplacecorp.com.br/file/general/hotsite-iplace-corp-distribuicao-image-min.png" 
            height={278} 
            width={770}
          />
        </section>
      </main>
    </>
  )
}
