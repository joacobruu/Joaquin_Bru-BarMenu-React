import { useState } from "react"
import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const useStyles = makeStyles({
  cardContent:{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100vh'
  },

  titulo:{
    fontSize: '2.5rem'
  },

  containerP: {
    maxWidth: '50%'
  },

  p:{
    marginTop: '1rem',
    fontSize: '1rem',
  },

  nombre:{
    fontWeight: 'bold'
  },

  precio:{
    fontWeight: 'bold',
    marginBottom: '1rem'
  },

  img: {
    maxWidth: '300px'
  }
})

const ItemDetail = ({ producto }) => {

  const [count, setcount] = useState(0)
  const classes = useStyles()

  const {cart, mostrarListado, agregarAlCarrito, removeItem} = useCartContext()
  // console.log(cartList);
  // console.log(mostrarListado);

  const onAdd = (cant) => {
    console.log(cant);
    setcount(cant)
    agregarAlCarrito({producto, cantidad: cant})
  }
  console.log(cart);

  const remove = (id) => {
    removeItem(id)
  }

  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <div className={classes.img}>
            <img src={producto.img} alt={producto.nombre} style={{width: '100%'}}/>
          </div>
          <div className={classes.containerP}>
            <Typography component='h4' className={classes.titulo}>{producto.marca}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.nombre}`}>{producto.nombre}</Typography>
            <Typography component='p' className={classes.p}>{producto.descripcion}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.precio}`}>{'$' + producto.precio}</Typography>
            <Typography component= 'p'>Disponible: {producto.stock}</Typography>
            <ItemCount stock={producto.stock} initial={producto.stock >= 1 ? 1 : 0} onAdd={onAdd}/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemDetail
