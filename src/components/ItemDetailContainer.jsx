import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProductos } from "../storage/service"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
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
  }, [idProducto])

  

  return (
    <div style={{width: '70%'}}>
      {producto.map((item) => <ItemDetail img={item.img} nombre={item.nombre} marca={item.marca} descripcion={item.descripcion} precio={item.precio}/>)}
    </div>
  )
}

export default ItemDetailContainer
