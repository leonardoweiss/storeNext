import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
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
            {props.products.map(el => {
                <div key={el.id}>
                    <ProductCard product={el}/>
                </div>
            })}
        </>
    )
}

export default Products