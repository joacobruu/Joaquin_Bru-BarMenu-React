import { CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../storage/getFirestore"
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
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    const db = getFirestore()
    
      if (idCategoria === "labiales") {
        const dbQuery = db.collection('productos').where('categoria', '==', 'labiales').get()
        dbQuery.then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      }
      if (idCategoria === "paletas"){
        const dbQuery = db.collection('productos').where('categoria', '==', 'paletas').get()
        dbQuery.then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      }
      if (idCategoria === "delineadores"){
        const dbQuery = db.collection('productos').where('categoria', '==', 'delineadores').get()
        dbQuery.then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      }
      if (idCategoria === undefined || null){
        const dbQuery = db.collection('productos').get()
        dbQuery.then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      }
  }, [idCategoria])

  console.log(productos);

  const classes = useStyles()

  return (
    <div className={classes.container}>
      { loading ? <CircularProgress /> : productos.map((producto) => <Item key={producto.id} img={producto.img} marca={producto.marca} precio={producto.precio} nombre={producto.nombre} id={producto.id} />)}
    </div>
  )
}

export default ItemList
