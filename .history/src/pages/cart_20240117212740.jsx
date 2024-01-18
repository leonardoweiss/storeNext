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
                            <div>{el.name}</div>
                            <div>R${el.price}</div>
                            <div>{1}</div>
                            <div>{"R$1000,00"}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cart