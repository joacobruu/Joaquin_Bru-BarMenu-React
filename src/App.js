import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer name="Item 1" description="Descripcion Item 1"/>
      <ItemListContainer name="Item 2" description="Descripcion Item 2"/>
      <ItemListContainer name="Item 3" description="Descripcion Item 3"/>
      <ItemCount name="Item 1" description="Descripcion Item 1" />
    </>
  )
}

export default App;
