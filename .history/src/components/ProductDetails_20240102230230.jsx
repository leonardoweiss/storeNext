import Image from "next/image"

function ProductDetails() {
    return (
        <>
            <main>
                <Image src={imageUrl} height={135} width={180}/>
            </main>
        </>
    )
}

export default ProductDetails