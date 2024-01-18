import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={420} width={540}/>
            </main>
        </>
    )
}

export default ProductDetails