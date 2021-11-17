import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    marginBottom: '1rem',
    marginTop: '1rem'
  },

  containerCant: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },

  cant: {
    fontSize: '1rem',
  },

  icon: {
    color: '#3F51B5'
  },

  span: {
    '&:hover': {
      cursor: 'pointer'
    }
  },

  containerBtn: {
    display: 'flex'
  },

  btn: {
    marginRight: '.5rem'
  }
})

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const [inputType, setInputType] = useState('Agregar al Carrito')

  const classes = useStyles()

  const add = () => {
    if(count < stock) setCount(count + 1)
  }

  const remove = () => {
    if(count > 1) setCount(count - 1)
  }

  const handleOnAdd = () => {
    console.log(count);
    onAdd(count)
    setCount(initial)
    setInputType('Comprar')
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerCant}>
        <span className={classes.span} onClick={() => remove()}><RemoveIcon className={classes.icon} /></span>
        <Typography component='p' className={classes.cant}>{count}</Typography>
        <span className={classes.span} onClick={() => add()}><AddIcon className={classes.icon} /></span>
      </div>
      <div className={classes.containerBtn}>
        {
          inputType === 'Agregar al Carrito' ?
            <Button className={classes.btn} onClick={() => handleOnAdd()} variant='contained' color='primary'>Agregar al Carrito</Button>
            :
            <Link exact to='/carrito'>
              <Button className={classes.btn} variant='contained' color='primary'>Terminar Compra</Button>
            </Link>
        }
        <Link exact to='/'>
          <Button variant='contained'>Volver</Button>
        </Link>
      </div>
    </div>
  )
}

export default ItemCount
