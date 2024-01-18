import Header from "@/components/Header"
import { useCart } from "@/hooks/useCart"
import { useEffect, useState } from "react"

function Cart() {

    const [listCart, setListCart] = useState([])
    const {cart, addProduct, removeProduct} = useCart()

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
        // alert(JSON.stringify(listCart))
    
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
                        <li key={el.product.id}>
                            <div>{el.product.name}</div>
                            <div>R${el.product.price},00</div>
                            <div>{el.quantity}</div>
                            <div>R${el.quantity * el.product.price},00</div>
                            <div>
                                <button onClick={() => {addProduct()}}>+</button>
                                <button onClick={() => {removeProduct}}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Cart