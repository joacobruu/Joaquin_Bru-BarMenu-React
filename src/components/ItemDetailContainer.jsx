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
    .catch(err => console.log(err))
  }, [idProducto])  

  return (
    <div style={{width: '70%', minHeight:'100vh'}}>
      {producto.map((item) => <ItemDetail key={item.id} img={item.img} nombre={item.nombre} marca={item.marca} descripcion={item.descripcion} precio={item.precio} stock={item.stock}/>)}
    </div>
  )
}

export default ItemDetailContainer
