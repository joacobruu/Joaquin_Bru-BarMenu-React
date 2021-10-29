import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import ItemCount from "./ItemCount"

const useStyles = makeStyles({
  card: {
    width: 250,
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  media: {
    top: 20,
    height: 200,
    objectFit: 'cover',
    scale: 0.3
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

const Item = ({ img, title, genre }) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionmedia}>
          <CardMedia className={classes.media}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography className={classes.title} variant="h4" component="p">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {genre}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ItemCount />
      </Card>
    </div>
  )
}

export default Item
