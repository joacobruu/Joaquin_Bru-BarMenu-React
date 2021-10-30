import { Button, Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

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

const itemMock = {
  "id": 1,
  "marca": "Natasha Denona",
  "nombre": "Lip Oh-Phoria - Chestnut",
  "descripcion": "Un bálsamo labial extra para calmar, refrescar y volver a despertar labios secos y agrietados.",
  "img": "https://www.natashadenona.com/Media/Uploads/Chesnut.jpg",
  "precio": 3900,
  "stock": 10
}

const ItemDetail = () => {

  const classes = useStyles()

  return (
    <div>
      <Card>
        <CardContent className={classes.cardContent}>
          <div>
            <img src={itemMock.img} alt={itemMock.nombre} />
          </div>
          <div>
            <Typography component='h4' className={classes.titulo}>{itemMock.marca}</Typography>
            <Typography component='p' className={classes.p + ' ' + classes.nombre}>{itemMock.nombre}</Typography>
            <Typography component='p' className={classes.p}>{itemMock.descripcion}</Typography>
            <Typography component='p' className={classes.p + ' ' + classes.precio}>{'$' + itemMock.precio}</Typography>
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
