import Image from "next/image"

function ProductDetails({ product }) {
    return (
        <>
            <main>
                <Image src={product.imageUrl} height={420} width={540}/>
                <div>
                    <h1>pro</h1>
                </div>
            </main>
        </>
    )
}

export default ProductDetails