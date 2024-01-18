const { createContext, useState } = require("react");

const cartContext = createContext({})

export const cartContextProvider = () => {
    const [cart, setCart] = useState([])
}