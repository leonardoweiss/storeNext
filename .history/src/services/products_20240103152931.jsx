export const fetchProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)
    return products
}

export async function fetchProduct(id) {
    const product = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`)
    return product
}