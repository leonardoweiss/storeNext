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
    const pro
}

function Product() {
    return(
        <>

        </>
    )
}