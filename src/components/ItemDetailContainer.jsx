import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProductos } from "../storage/service"
import { CircularProgress } from "@material-ui/core"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const { idProducto } = useParams()

  useEffect(() => {
    getProductos.then(res => {
      const lista = [...res.labiales, ...res.delineadores, ...res.paletas]
      for(const item of lista){
        if(item.id === parseInt(idProducto)){
            setProducto([item])
            console.log(item);
        }
      }
    })
    .catch(err => console.log(err))
    .finally(setLoading(false))
  }, [idProducto])  

  return (
    <div style={{width: '70%', minHeight:'100vh'}}>
      {loading ? <CircularProgress /> : producto.map((item) => <ItemDetail img={item.img} nombre={item.nombre} marca={item.marca} descripcion={item.descripcion} precio={item.precio}/>)}
    </div>
  )
}

export default ItemDetailContainer
