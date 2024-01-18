import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={0} width={720}/>
            </main>
        </>
    )
}

export default ProductDetails