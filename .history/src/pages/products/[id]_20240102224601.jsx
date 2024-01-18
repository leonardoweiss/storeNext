import { fetchProduct } from "@/services/products"

export const getStaticProps = async (context) => {
    const id = context.params.id

    if (typeof id === "string") {
        const product = fetchProduct(id)

        return 
    }
}