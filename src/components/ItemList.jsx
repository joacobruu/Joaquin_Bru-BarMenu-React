import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useEffect, useState } from "react"
import { getMovies } from "../storage/service"
import Item from "./Item"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: 10,
  }
})

const ItemList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies.then(res => {
      setMovies(res)
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.container}>
      { loading ? <CircularProgress /> : movies.map((movie) => <Item key={movie.id} img={movie.img} title={movie.title} genre={movie.genre} />)}
    </div>
  )
}

export default ItemList
