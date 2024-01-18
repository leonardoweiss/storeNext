export const fetchProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)
    return products.json()
}

export const fetchProduct = async id => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`)
    return product.json()
}