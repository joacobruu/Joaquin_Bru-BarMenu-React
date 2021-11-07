import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, CardContent, Typography } from "@material-ui/core"
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
  },

  btn:{
    marginRight: '.5rem'
  }
})

const ItemDetail = ({img, marca, nombre, descripcion, precio, stock}) => {

  const [inputType, setInputType] = useState('Agregar al Carrito')

  const classes = useStyles()

  const handleInput = () => {
    setInputType('Comprar')
  }

  const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
  console.log(cartList);
  console.log(mostrarListado());

  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <div className={classes.img}>
            <img src={img} alt={nombre} style={{width: '100%'}}/>
          </div>
          <div className={classes.containerP}>
            <Typography component='h4' className={classes.titulo}>{marca}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.nombre}`}>{nombre}</Typography>
            <Typography component='p' className={classes.p}>{descripcion}</Typography>
            <Typography component='p' className={`${classes.p} ${classes.precio}`}>{'$' + precio}</Typography>
            <ItemCount initial={stock >= 1 ? 1 : 0} stock={stock}/>
            <Typography component= 'p'>Disponible: {stock}</Typography>
            <div>
              {
                inputType === 'Agregar al Carrito' ?
                  <Button className={classes.btn} onClick={() => handleInput()} variant='contained' color='primary'>Agregar al Carrito</Button> 
                :
                  <Link exact to='/cart'>
                    <Button className={classes.btn} variant='contained' color='primary'>Terminar Compra</Button>
                  </Link>
              }
              <Link exact to='/'>
                <Button variant='contained'>Volver</Button>
              </Link>              
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemDetail
