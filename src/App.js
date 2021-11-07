import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <NavBar />
          <div style={{ backgroundColor: "#030708", paddingTop: 30, paddingBottom: 30, width: '100%', display: 'flex', justifyContent: 'center', minHeight:'100vh' }}>
            <Switch>
              <Route exact path='/'>
                <ItemListContainer />
              </Route>
              <Route path='/categoria/:idCategoria' exact>
                <ItemListContainer />
              </Route>
              <Route exact path='/detalle/:idProducto'>
                <ItemDetailContainer />
              </Route>
              <Route exact path='/carrito'>
                <Cart />
              </Route>
            </Switch>
          </div>
        </Router>
      </CartContextProvider>
    </>
  )
}

export default App;
