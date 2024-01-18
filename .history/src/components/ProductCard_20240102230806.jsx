import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}) {
    const { id, name, imageUrl, price } = product
    return(
        <>
            <article className="product">
                <Image src={imageUrl} height={135} width={180}/>
                <Link href={`/products/${id}`}><h3>{name}</h3></Link>
                <h5>R$ {price},00</h5>
                <button type="button" className="btn-add-cart">Adicionar ao carrinho</button>
            </article>
        </>
    )
}