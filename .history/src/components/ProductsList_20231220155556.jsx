import ProductCard from "./ProductCard"

export default function ProductsList({products}) {
    return(
        <>
            {products.map(product => {
                <div key={}>
                    <ProductCard product={product}/>
                </div>
            })}
        </>
    )
}