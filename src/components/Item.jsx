import { Card, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  imgDiv: {
    height: 300,
    width: 300
  }
})

const Item = ({ img, marca, precio, nombre }) => {
  const classes = useStyles()

  return (
    <div>
      <Card>
        <CardContent>
          <div className={classes.imgDiv}>
            <img style={{width:'100%', height:'100%'}} src={img} alt={nombre}/>
          </div>
          <Typography variant='h5' component='p'>
            {marca}
          </Typography>
          <Typography component='p'>
            {nombre}
          </Typography>
          <Typography component='p'>
            {'$' + precio}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Item
