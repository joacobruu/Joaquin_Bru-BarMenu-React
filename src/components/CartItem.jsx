import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useCartContext } from "../context/CartContext"

const useStyles = makeStyles({
  container: {
    display: "flex",
    maxHeight: "4rem",
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: {
    width: "80px",
    height: "80px"
  },

  delete: {
    color: "red",
    cursor: "pointer"
  }
})

function CartItem({ producto, cantidad, remove }) {

  const { removeItem } = useCartContext()

  const classes = useStyles()

  return (
    <div>
      <Card>
        <CardContent className={classes.container}>
          <div className={classes.img}>
            <img style={{width:"100%", height:"100%"}} src={producto.img} alt={producto.nombre} />
          </div>
          <Typography variant="h5" component="p">
            {producto.marca}
          </Typography>
          <Typography component="p">
            {producto.nombre}
          </Typography>
          <Typography component="p">
            $ {producto.precio}
          </Typography>
          <Typography component="p">
            x{cantidad}
          </Typography>
          <DeleteForeverIcon className={classes.delete} onClick={() => remove(producto.id)}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default CartItem
