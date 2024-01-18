import Image from "next/image"

function ProductDetails({ product }) {
    const { id, name, imageUrl, price, in } = product
    return (
        <>
            <main>
                <Image src={imageUrl} height={420} width={540}/>
                <div>
                    <h1>pro</h1>
                </div>
            </main>
        </>
    )
}

export default ProductDetails