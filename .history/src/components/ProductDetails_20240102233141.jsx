import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                {/* <Image src={product.imageUrl} height={540} width={720}/> */}
                <h1>{product.name}</h1>
            </main>
        </>
    )
}

export default ProductDetails