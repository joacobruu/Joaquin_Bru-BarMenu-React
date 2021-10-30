import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProductos } from "../storage/service"
import Item from "./Item"

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: 10,
    minHeight: '100vh'
  }
})


const ItemList = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {idCategoria} = useParams()
  

  useEffect(() => {
    getProductos.then(res => {
      if (idCategoria === "labiales") setProductos([...res.labiales])
      if (idCategoria === "paletas") setProductos([...res.paletas])
      if (idCategoria === "delineadores") setProductos([...res.delineadores])
      if (idCategoria === undefined || null) setProductos([...res.labiales, ...res.paletas, ...res.delineadores])
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [idCategoria])

  console.log(idCategoria);

  const classes = useStyles()

  return (
    <div className={classes.container}>
      { loading ? <CircularProgress /> : productos.map((producto) => <Item key={producto.id} img={producto.img} marca={producto.marca} precio={producto.precio} nombre={producto.nombre} id={producto.id} />)}
    </div>
  )
}

export default ItemList
