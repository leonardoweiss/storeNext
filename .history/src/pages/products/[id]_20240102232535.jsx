import Header from "@/components/Header"
import ProductDetails from "@/components/ProductDetails"
import { fetchProduct, fetchProducts } from "@/services/products"

export const getStaticProps = async (context) => {
    const id = context.params.id
    console.log(id);

    if (typeof id === "string") {
        const product = await fetchProduct(id)

        return {
            props: {
                product
            }
        }
    }

    return {
        redirect:{
            destination: "/products",
            permanent: false
        }
    }
}

export const getStaticPaths = async () => {
    const products = await fetchProducts()

    const data = Array.from(products)

    const paths = data.map(product => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

function Product(props) {
    return(
        <>
            <Header />
            <ProductDetails product={props.product} />
        </>
    )
}

export default Product