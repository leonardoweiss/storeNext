import Image from "next/image";
import Link from "next/link";

export default function ProductCard({id, imageURL, name, price}) {
    return(
        <>
            <article>
                <Image src={src} height={300} width={400}/>
                <h4>{price}</h4>
                <Link href=><h2>{name}</h2></Link>
            </article>
        </>
    )
}