import { fetchProduct } from "@/services/products"

export const getStaticProps = context => {
    const product = fetchProduct
}