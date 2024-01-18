import Image from "next/image";

export default function ProductCard({id, imageURL, name, price}) {
    return(
        <>
            <article>
                <Image src={src} height={300} width={200}/>
            </article>
        </>
    )
}