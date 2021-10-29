import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Container } from "@material-ui/core";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="100%" style={{backgroundColor: "#030708", paddingTop: 30, paddingBottom: 30}}>
        <ItemListContainer />
        <ItemDetailContainer />
      </Container>
    </>
  )
}

export default App;
