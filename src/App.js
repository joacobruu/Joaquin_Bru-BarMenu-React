import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{backgroundColor: "#030708", paddingTop: 30, paddingBottom: 30}}>
        <ItemListContainer />
      </Container>
    </>
  )
}

export default App;
