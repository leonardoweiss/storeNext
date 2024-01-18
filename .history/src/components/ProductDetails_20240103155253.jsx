import Image from "next/image"

function ProductDetails({ product }) {
    const {name, imageUrl, description, price, inStock } = product
    return (
        <>
            <main >
                <Image src={imageUrl} height={420} width={540}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <p><b>Descrição:</b>{description}</p>
                    <p>Em estoque: {inStock}</p>
                    <button>Comprar agora</button>
                </div>
            </main>
        </>
    )
}

export default ProductDetails