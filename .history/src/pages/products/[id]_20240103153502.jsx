import Header from "@/components/Header"
import { fetchProduct, fetchProducts } from "@/services/products"
import Image from "next/image"

export const getStaticProps = async (context) => {
    const id = context.params.id
    console.log(id)

    if (typeof id === "string") {
        const product = await fetchProduct(id)

        console.log("Product data:", product);

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
            {/* <Image src={props.product.imageUrl} height={540} width={720}/> */}
            <h2>oi</h2>
        </>
    )
}

export default Product