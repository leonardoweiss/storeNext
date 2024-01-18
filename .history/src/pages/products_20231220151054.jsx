import { fetchProducts } from "@/services/products"

export const getStaticProps = async () => {
    const products = await fetchProducts()
        .then(res => res.json())    
        return {props: {products}}
}

function Products(props) {
    return(
        <>
            <h2>Server Side</h2>
            <div>
                {props.products[0].name}
            </div>
        </>
    )
}

export default Products