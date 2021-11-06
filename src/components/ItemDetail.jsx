import { Button, Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const useStyles = makeStyles({
  cardContent:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },

  titulo:{
    fontSize: '2.5rem'
  },

  p:{
    marginTop: '1rem',
    fontSize: '1rem',
    width: '50%'
  },

  nombre:{
    fontWeight: 'bold'
  },

  precio:{
    fontWeight: 'bold',
    marginBottom: '1rem'
  },

  btn:{
    marginRight: '.5rem'
  }
})

const ItemDetail = ({img, marca, nombre, descripcion, precio}) => {

  const classes = useStyles()

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  console.log(cartList);
  console.log(mostrarListado());

  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <div>
            <img src={img} alt={nombre} />
          </div>
          <div>
            <Typography component='h4' className={classes.titulo}>{marca}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.nombre}`}>{nombre}</Typography>
            <Typography component='p' className={classes.p}>{descripcion}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.precio}`}>{'$' + precio}</Typography>
            <ItemCount />
            <div>
              <Button className={classes.btn} variant='contained' color='primary'>Comprar</Button>
              <Button variant='contained'>Volver</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemDetail
