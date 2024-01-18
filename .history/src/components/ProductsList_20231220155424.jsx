import ProductCard from "./ProductCard"

export default function ProductsList({products}) {
    return(
        <>
            {products.map(product => {
                <ProductCard 
            })}
        </>
    )
}