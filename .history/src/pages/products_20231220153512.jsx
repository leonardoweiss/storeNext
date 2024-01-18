import { fetchProducts } from "@/services/products"

export const getStaticProps = async () => {
    const products = await fetchProducts()
        .then(res => res.json())    
        return {props: {products}}
}

function Products(props) {
    return(
        <>
            
        </>
    )
}

export default Products