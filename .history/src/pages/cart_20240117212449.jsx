import Header from "@/components/Header"
import { useCart } from "@/hooks/useCart"

function Cart() {

    const {cart} = useCart()

    return (
        <>
            <Header />
            <h1>Carrinho</h1>
            <div className="table-cart">
                <header>
                    <div>Produto</div>
                    <div>Preço</div>
                    <div>Qtd.</div>
                    <div>Total</div>
                </header>
                <section>
                    {cart.map(el => (
                        <ul>
                            <li>{el.name}</li>
                            <li>{el.price}</li>
                            <li>{el.in}</li>
                            <li>{el.}</li>
                            <li>{el.}</li>
                        </ul>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Cart