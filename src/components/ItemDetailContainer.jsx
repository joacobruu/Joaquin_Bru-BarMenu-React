import { Card, CardContent, Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"



const useStyles = makeStyles({
  imgDiv: {
    height: 300,
    width: 300
  },

  cardContent: {
    display: 'flex'
  }
})

const ItemDetailContainer = () => {
  const classes = useStyles()

  const item = {
    "id": 1,
    "marca": "Natasha Denona",
    "nombre": "Lip Oh-Phoria - Chestnut",
    "descripcion": "Un bálsamo labial extra para calmar, refrescar y volver a despertar labios secos y agrietados.",
    "img": "https://www.natashadenona.com/Media/Uploads/Chesnut.jpg",
    "precio": 3900,
    "stock": 10
  };

  return (
    <div>
      <Container maxWidth="sm" style={{ backgroundColor: "#ffffff", display: 'flex' }}>
        <Card>
          <CardContent className={classes.cardContent}>
            <div className={classes.imgDiv}>
              <img style={{ width: '100%', height: '100%' }} src={item.img} alt={item.nombre} />
            </div>
            <div style={{width:'40%'}}>
              <Typography variant='h5' component='p'>
                {item.marca}
              </Typography>
              <Typography component='p'>
                {item.nombre}
              </Typography>
              <Typography component='p'>
                {item.descripcion}
              </Typography>
              <Typography component='p'>
                {'$' + item.precio}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default ItemDetailContainer
