import Image from "next/image"

function ProductDetails({ product }) {
    const { id, name, imageUrl, price } = product
    
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={540} width={720}/>
            </main>
        </>
    )
}

export default ProductDetails