import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { useState } from 'react'
import { getFirestore } from '../storage/getFirestore'

const Form = ({ cart, total }) => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    checkEmail: '',
    direccion: '',
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const validateForm = () => {
    for (const key in form) {
      if (form[key] === '') {
        return false
      }
    }
    return true
  }

  const validateEmail = () => {
    if (form.email === form.checkEmail) return true
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      if (validateEmail()) {
        let pedido = {}

        pedido.buyer = form
        pedido.total = total()
        pedido.fecha = new Date()
        pedido.items = cart.map(item => {
          const id = item.producto.id;
          const nombre = item.producto.nombre;
          const cantidad = item.cantidad;
          const precio = item.producto.precio * item.cantidad;

          return { id, nombre, cantidad, precio }
        })

        console.log(pedido);


        const db = getFirestore()
        db.collection('orders').add(pedido)
          .then(res => alert(`Compra exitosa, su id de seguimiento es: ${res.id}`))

        handleClose()
      } else {
        alert('El email debe coincidir')
      }
    } else {
      alert('Complete todos los campos')
    }


  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Comprar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Terminar compra</DialogTitle>
        <DialogContent>
          {
            cart.map((item) => <DialogContentText key={item.producto.id}>{`${item.producto.nombre} x${item.cantidad} $${item.producto.precio * item.cantidad}`}</DialogContentText>)
          }
          <DialogContentText>
            {`Total: $${total()}`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="text"
            onChange={(e) => { setForm(prevForm => ({ ...prevForm, nombre: e.target.value })) }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="telefono"
            label="Telefono"
            type="number"
            onChange={(e) => { setForm(prevForm => ({ ...prevForm, telefono: e.target.value })) }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            onChange={(e) => { setForm(prevForm => ({ ...prevForm, email: e.target.value })) }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="emailConfirm"
            label="Reperir Email"
            type="email"
            onChange={(e) => { setForm(prevForm => ({ ...prevForm, checkEmail: e.target.value })) }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="direccion"
            label="Direccion"
            type="text"
            onChange={(e) => { setForm(prevForm => ({ ...prevForm, direccion: e.target.value })) }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant='contained' color="primary">
            Comprar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Form
