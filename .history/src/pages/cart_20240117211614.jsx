import Header from "@/components/Header"

function Cart() {

    const {cart} = use

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
                    
                </section>
            </div>
        </>
    )
}

export default Cart