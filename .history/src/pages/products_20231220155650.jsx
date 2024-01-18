import Header from "@/components/Header"
import ProductsList from "@/components/ProductsList"
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
            <h2>Nossos Produtos</h2>
            <ProductsList products={props.products} /
        </>
    )
}

export default Products