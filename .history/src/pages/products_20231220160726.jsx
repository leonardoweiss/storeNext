import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { fetchProducts } from "@/services/products"

const obj = {
    "id": 1,
    "name": "Macbook Air",
    "description": "Uma potência no ar. O chip M1 da Apple revolucionou nosso notebook mais fino e leve. A CPU e a GPU estão mais rápidas, até 3,5 vezes e até cinco vezes, respectivamente. Nosso Neural Engine avançado deixa o aprendizado de máquina até nove vezes mais veloz. A bateria oferece mais tempo de duração. E trocamos a ventoinha pelo silêncio. Nunca tanto desempenho esteve reunido em um MacBook Air.",
    "price": 12508.00,
    "imageUrl": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000",
    "inStock": 50
}

export const getStaticProps = async () => {
    const products = await fetchProducts()
        .then(res => res.json())    
        return {props: {products}}
}

function Products(props) {
    return(
        <>
            <Header />
            <h2>Nossos Produtos</h2>
            <ProductCard product={obj}/>
        </>
    )
}

export default Products