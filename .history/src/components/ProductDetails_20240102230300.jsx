import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={imageUrl} height={135} width={180}/>
            </main>
        </>
    )
}

export default ProductDetails