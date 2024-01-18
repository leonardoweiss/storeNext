import Image from "next/image";

export default function ProductCard({src}) {
    return(
        <>
            <article>
                <Image src={src} height={}/>
            </article>
        </>
    )
}