import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartList, setcartList] = useState([])

  const agregarAlCarrito = (items) => {
    setcartList(items)
  }

  const mostrarListado = () => {
    console.log(cartList);
  }

  return (
    <CartContext.Provider value={{
      cartList,
      mostrarListado,
      agregarAlCarrito
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
