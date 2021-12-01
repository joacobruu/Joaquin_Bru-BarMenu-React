import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { useState } from 'react'
import { getFirestore } from '../storage/getFirestore'

const Form = ({ cart, total }) => {
  const [open, setOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [direccion, setDireccion] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }


  const validateEmail = () => {
    if (email != checkEmail) return alert('El Email debe coincidir!')
  }

  const handleClose = () => {
    setOpen(false)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    validateEmail()
    let pedido = {}

    let userInfo = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
      direccion: direccion
    }

    pedido.buyer = userInfo
    pedido.total = total()
    pedido.items = cart.map(item => {
      const id = item.producto.id;
      const nombre = item.producto.nombre;
      const precio = item.producto.precio * item.cantidad;

      return {id, nombre, precio}
    })

    console.log(pedido);
    

    const db = getFirestore()
    db.collection('orders').add(pedido)
    .then(res => console.log(res))
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
          onChange={(e) => {setNombre(e.target.value)}}
          fullWidth
        />
        <TextField
          margin="dense"
          id="apellido"
          label="Apellido"
          type="text"
          onChange={(e) => {setApellido(e.target.value)}}
          fullWidth
        />
        <TextField
          margin="dense"
          id="telefono"
          label="Telefono"
          type="number"
          onChange={(e) => {setTelefono(e.target.value)}}
          fullWidth
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          onChange={(e) => {setEmail(e.target.value)}}
          fullWidth
        />
        <TextField
          margin="dense"
          id="emailConfirm"
          label="Reperir Email"
          type="email"
          onChange={(e) => {setCheckEmail(e.target.value)}}
          fullWidth
        />
        <TextField
          margin="dense"
          id="direccion"
          label="Direccion"
          type="text"
          onChange={(e) => {setDireccion(e.target.value)}}
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
