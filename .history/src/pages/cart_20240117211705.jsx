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
                    <div></div>
                </header>
                <section>
                    {cart.map(el => (
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Cart