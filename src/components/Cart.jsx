import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem";

const Cart = () => {
  const {cart, removeItem, clear, getCartTotal, getTotalPrice} = useCartContext()

  const cartTotal = () => {
    return getCartTotal()
  }

  return (
    <div style={{width:"90%", display:"flex", flexDirection:"column", gap:"1rem"}}>
      {
        cartTotal() > 0 ?
          <div>
            {
              cart.map((item) => <CartItem key={item.producto.id} remove={removeItem} producto={item.producto} cantidad={item.cantidad}></CartItem>)
            }
            <Card>
              <CardContent>
                <Typography variant='h5' component='p'>
                  {`Total: $${getTotalPrice()}`}
                </Typography>
              </CardContent>
            </Card>
          </div>            
        :
          <Link exact to="/"><span style={{color: "white"}}>INICIO</span></Link>
      }
      <span style={{color: "white"}} onClick={() => clear()}>CLEAR</span>
    </div>
  )
}

export default Cart
