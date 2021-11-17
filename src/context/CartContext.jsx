import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const agregarAlCarrito = (items) => {
    if (items.cantidad > 0) {
      let enPedido = false
      cart.forEach(item => {
        if (item.producto.id === items.producto.id) {
          item.cantidad += items.cantidad
          enPedido = true
        }
      })
      if (!enPedido) setCart([...cart, items])
      console.log(cart);
    }
  }

  const removeItem = (id) => {
    let filtered = cart.filter(item => item.cantidad.id === id)
    setCart(filtered)
    console.log(cart);
  }

  const mostrarListado = () => {
    console.log(cart);
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    let inCart = false
    cart.forEach(item => {
      if (item.producto.id === id) inCart = true
    })
    return inCart
  }

  const getCartTotal = () => {
    return cart.length
  }

  return (
    <CartContext.Provider value={{
      cart,
      mostrarListado,
      agregarAlCarrito,
      removeItem,
      isInCart,
      getCartTotal,
      clear
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
