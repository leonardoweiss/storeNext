import { fetchProduct } from "@/services/products"

export const getStaticProps = async (context) => {
    const id = context.params.id

    if (typeof id === "string") {
        const product = fetchProduct(id)

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

    const paths = products.map(product => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return {
        paths,
        
    }
}

function Product() {
    return(
        <>

        </>
    )
}