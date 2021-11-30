import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { useState } from 'react'

const Form = ({ cart, total }) => {
  const [open, setOpen] = useState(false)

  console.log(cart);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
          fullWidth
        />
        <TextField
          margin="dense"
          id="apellido"
          label="Apellido"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="emailConfirm"
          label="Reperir Email"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="direccion"
          label="Direccion"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button variant='contained' onClick={handleClose} color="primary">
          Comprar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default Form
