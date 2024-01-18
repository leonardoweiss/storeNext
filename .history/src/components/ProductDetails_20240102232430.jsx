import Image from "next/image"

function ProductDetails({ product }) {
    console.log(product);
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={540} width={720}/>
            </main>
        </>
    )
}

export default ProductDetails