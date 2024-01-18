import Image from "next/image";

export default function ProductCard({imageURL, name, }) {
    return(
        <>
            <article>
                <Image src={src} height={150} width={200}/>
            </article>
        </>
    )
}