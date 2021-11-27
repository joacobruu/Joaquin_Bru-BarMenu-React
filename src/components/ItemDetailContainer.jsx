import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getFirestore } from "../storage/getFirestore"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const { idProducto } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const dbQuery = db.collection('productos')
    const item = dbQuery.doc(idProducto)

    item.get()
    .then(doc => setProducto([{ id: doc.id, ...doc.data() }]))
  }, [idProducto])  

  return (
    <div style={{width: '70%', minHeight:'100vh'}}>
      {producto.map((item) => <ItemDetail key={item.id} producto={item}/>)}
    </div>
  )
}

export default ItemDetailContainer
