import Header from "@/components/Header"
import { useCart } from "@/hooks/useCart"
import { useEffect, useState } from "react"

function Cart() {

    const [listCart, setListCart] = useState([])
    const {cart} = useCart()

    useEffect(() => {
        const entriesList = cart.reduce((list, product) => {
          const entryIndex = list.findIndex(entry => entry.product.id === product.id)
    
          if (entryIndex === -1) {
            return [
              ...list,
              {
                product,
                quantity: 1
              }
            ]
          }
    
          list[entryIndex].quantity++
          return list
    
        }, [])
    
        entriesList.sort((a, b) => a.product.id - b.product.id)
        setListCart(entriesList)
    
      }, [cart])

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
                    {listCart.map(el => (
                        <li key={el.id}>
                            <div>{el.name}</div>
                            <div>R${el.price},00</div>
                            <div>{el.quant}</div>
                            <div>{"R$1000,00"}</div>
                            <div>
                                <button>+</button>
                                <button onClick={localStorage.clear()}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cart