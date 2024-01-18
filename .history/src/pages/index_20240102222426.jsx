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
            <Link href="/products">
              <button type="button">Começar a comprar</button>
            </Link>
          </article>
          <Image 
            src="https://www.iplacecorp.com.br/file/general/hotsite-iplace-corp-distribuicao-image-min.png" 
            height={278} 
            width={770}
          />
        </section>

        <h1>
        <i class="fa-solid fa-angles-down"></i>
        </h1>

        <h1 className='center'>Categorias</h1>

        <section id='categories'>

          <article className='product'>
            <Image width={200} height={150} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000"/>
            <p>Macbooks</p>
          </article>

          <article className='product'>
            <Image width={200} height={150} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1644989935267"/>
            <p>Iphones</p>
          </article>

          <article className='product'>
            <Image width={200} height={150} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202111_GEO_BR?wid=600&hei=500&fmt=png-alpha&.v=1635806350000" />
            <p>Ipads</p>
          </article>

          <article className='product'>
            <Image width={200} height={150} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=600&hei=500&fmt=jpeg&qlt=95&.v=1625868688000" />
            <p>Mac Pro</p>
          </article>

        </section>
      </main>
    </>
  )
}
