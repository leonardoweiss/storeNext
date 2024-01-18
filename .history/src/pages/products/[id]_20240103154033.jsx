import Header from "@/components/Header"
import ProductDetails from "@/components/ProductDetails"
import { fetchProduct, fetchProducts } from "@/services/products"
import Image from "next/image"

export const getStaticProps = async (context) => {
    const id = context.params.id
    const product = await fetchProduct(id)

    return {
        props: {
            product
        }
    }

    // return {
    //     redirect:{
    //         destination: "/products",
    //         permanent: false
    //     }
    // }
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
            <ProductDetails /
        </>
    )
}

export default Product