import Header from "@/components/Header"
import { useCart } from "@/hooks/useCart"

function Cart() {

    const {cart} = useCart()

    return (
        <>
            <Header />
            <h1 className="page-title">Carrinho</h1>
            <div className="table-cart">
                <header>
                    <div>Produto</div>
                    <div>Preço</div>
                    <div>Qtd.</div>
                    <div>Total</div>
                    <div></div>
                </header>
                <ul>
                    {cart ? cart.map(el => (
                        <li key={el.id}>
                            <div>{el.name}</div>
                            <div>R${el.price},00</div>
                            <div>{1}</div>
                            <div>{"R$1000,00"}</div>
                            <div>
                                <button>+</button>
                                <button onClick={localStorage.clear()}>-</button>
                            </div>
                        </li>
                    )) : ""}
                </ul>
            </div>
        </>
    )
}

export default Cart