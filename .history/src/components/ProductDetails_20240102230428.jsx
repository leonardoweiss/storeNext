import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={imageUrl} height={540} width={720}/>
            </main>
        </>
    )
}

export default ProductDetails