import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { fetchProducts } from "@/services/products"

export const getStaticProps = async () => {
    const products = await fetchProducts()
        .then(res => res.json())    
        return {props: {products}}
}

function Products(props) {
    return(
        <>
            <Header />
            <h1 className="page-title center">Nossos Produtos</h1>
            <section className="products">
                {props.products.map(prod => (
                    <ProductCard key={prod.id} product={prod}/>
                ))}
            </section>
        </>
    )
}

export default Products