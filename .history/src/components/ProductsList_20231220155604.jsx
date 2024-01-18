import ProductCard from "./ProductCard"

export default function ProductsList({products}) {
    return(
        <>
            {products.map(product => {
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            })}
        </>
    )
}