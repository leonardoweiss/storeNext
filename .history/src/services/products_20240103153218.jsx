export const fetchProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)
    return products
}

export async function fetchProduct(id) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`);

        if (!response.ok) {
            throw new Error(`Erro ao buscar o produto: ${response.status} ${response.statusText}`);
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error("Erro na função fetchProduct:", error);
        throw error; // Lança novamente o erro para que quem chama a função possa lidar com ele
    }
}