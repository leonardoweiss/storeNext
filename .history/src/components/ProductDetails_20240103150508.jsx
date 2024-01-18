import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={540} width={720}/>
            </main>
            <a href=""></a>
        </>
    )
}

export default ProductDetails