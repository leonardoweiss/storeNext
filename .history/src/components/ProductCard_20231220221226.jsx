import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}) {
    const { id, name, imageUrl, price } = product
    return(
        <>
            <article  className="product">
                <Image src={imageUrl} height={135} width={180}/>
                <Link href={`/product/${id}`}><h4>{name}</h4></Link>
                <h4>R$ {price},00</h4>
                <button type="button" className="btn-add-cart">Adicionar ao carrinho</button>
            </article>
        </>
    )
}