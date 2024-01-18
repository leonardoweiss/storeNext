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
                <ul>
                    {cart.map(el => (
                        <li>
                            <li>{el.name}</li>
                            <li>{el.price}</li>
                            <li>{el.inStock}</li>
                            <li>{"R$1000,00"}</li>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cart