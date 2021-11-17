import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem";

const Cart = () => {
  const {cart, removeItem, clear, getCartTotal} = useCartContext()

  const emptyCart = () => {
    return getCartTotal()
  }

  return (
    <div style={{width:"90%", display:"flex", flexDirection:"column", gap:"1rem"}}>
      {
        emptyCart() > 0 ? 
            cart.map((item) => <CartItem key={item.producto.id} remove={removeItem} producto={item.producto} cantidad={item.cantidad}></CartItem>)
            
        :
          <Link exact to="/"><span style={{color: "white"}}>INICIO</span></Link>
      }
      <span style={{color: "white"}} onClick={() => clear()}>CLEAR</span>
    </div>
  )
}

export default Cart
