import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}) {
    const { id, name, imageUrl, price } = product
    return(
        <>
            <article  className="product">
                <Image src={imageUrl} height={135} width={180}/>
                <h4>R${price},00</h4>
                <Link href={`/product/${id}`}><h2>{name}</h2></Link>
                <button type="button" className="btn-add-cart">Adicionar ao carrinho</button>
            </article>
        </>
    )
}