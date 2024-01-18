
import { useCart } from "@/hooks/useCart"
import Image from "next/image"

function ProductDetails({ product }) {
    const {name, imageUrl, description, price, inStock } = product
    const { addProduct } = useCart
    return (
        <>
            <main className="productDetails">
                <Image src={imageUrl} height={420} width={540}/>
                <div>
                    <h1>{name}</h1>
                    <h2>R${price},00</h2>
                    <p>
                        <b>Descrição: </b>
                        {description}
                    </p>
                    <p>Em estoque: {inStock}</p>
                    <button type="button" onClick={() => {addProduct(product)}}>Comprar agora</button>
                </div>
            </main>
        </>
    )
}

export default ProductDetails