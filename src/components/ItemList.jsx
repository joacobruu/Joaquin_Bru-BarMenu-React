import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useEffect, useState } from "react"
import { getProductos } from "../storage/service"
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
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    getProductos.then(res => {
      setProductos([...res.labiales, ...res.paletas, ...res.delineadores])
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.container}>
      { loading ? <CircularProgress /> : productos.map((producto) => <Item key={producto.id} img={producto.img} marca={producto.marca} precio={producto.precio} nombre={producto.nombre} />)}
    </div>
  )
}

export default ItemList
