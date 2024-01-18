const { createContext, useState, useContext, useEffect } = require("react");

const cartContext = createContext({})

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = localStorage.getItem('shopping-cart')
    
        if (storedCart) {
          setCart(JSON.parse(storedCart))
        }
      }, [])
    
      const addProduct = (product) => {
        const updatedCart = [...cart, product]
        localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
        setCart(updatedCart)
        alert('Produto adicionado com sucesso')
      }
    
      const removeProduct = (productId) => {
        const productIndex = cart.findIndex(product => product.id === productId)
    
        if (productIndex !== -1) {
          const updatedCart = [...cart]
          updatedCart.splice(productIndex, 1)
          localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
          setCart(updatedCart)
        }
        alert('Produto removido com sucesso')
      }
    
      return (
        <cartContext.Provider value={{ cart, addProduct, removeProduct }}>
          {props.children}
        </cartContext.Provider>
      )
}

export const useCart = () => useContext(cartContext)