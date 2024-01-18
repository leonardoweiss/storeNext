import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}) {
    const { id, name, imageUrl, price } = product
    return(
        <>
            <article>
                <Image src={imageUrl} height={150} width={180}/>
                <h4>{price}</h4>
                <Link href={`/product/${id}`}><h2>{name}</h2></Link>
            </article>
        </>
    )
}