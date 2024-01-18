import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={420} width={540}/>
                <div>
                    
                </div>
            </main>
        </>
    )
}

export default ProductDetails