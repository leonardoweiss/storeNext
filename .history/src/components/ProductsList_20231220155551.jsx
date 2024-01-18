import ProductCard from "./ProductCard"

export default function ProductsList({products}) {
    return(
        <>
            {products.map(product => {
                <div>
                    <ProductCard product={product}/>
                </div>
            })}
        </>
    )
}