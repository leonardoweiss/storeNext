import Image from "next/image";

export default function ProductCard({src}) {
    return(
        <>
            <article>
                <Image src={src} height={15} width={200}/>
            </article>
        </>
    )
}