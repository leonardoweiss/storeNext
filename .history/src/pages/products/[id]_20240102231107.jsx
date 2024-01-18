import Header from "@/components/Header"
import ProductDetails from "@/components/ProductDetails"
import { fetchProduct, fetchProducts } from "@/services/products"

export const getStaticProps = async (context) => {
    const id = context.params.id

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
    console.log(products)

    // const paths = products.map(product => {
    //     return {
    //         params: {
    //             id: product.id.toString()
    //         }
    //     }
    // })

    return {
        paths,
        fallback: false
    }
}

function Product() {
    return(
        <>
            <Header />
            <ProductDetails product={props.product} />
        </>
    )
}

export default Product