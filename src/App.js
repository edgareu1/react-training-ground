import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App(props) {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
