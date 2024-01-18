import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={productimageUrl} height={540} width={720}/>
            </main>
        </>
    )
}

export default ProductDetails