import { useCartContext } from "../context/CartContext"

const Cart = () => {

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  console.log(cartList);
  console.log(mostrarListado());

  return (
    <div>
      
    </div>
  )
}

export default Cart
