export const fetchProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status} ${response.statusText}`)
        }

        const products = await response.json()
        return products
    } catch (error) {
        console.error("Erro na função fetchProducts:", error)
        throw error
    }
}


export async function fetchProduct(id) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`)

        if (!response.ok) {
            throw new Error(`Erro ao buscar o produto: ${response.status} ${response.statusText}`)
        }

        const product = await response.json()
        return product
    } catch (error) {
        console.error("Erro na função fetchProduct:", error)
        throw error
    }
}