import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];

    storeProducts.forEach((item) => {
      products = [...products, item];
    });

    this.setState(() => {
      return { products };
    });
  };

  addToCart = id => {
    const tempProducts = [...this.state.products];
    const product = tempProducts[id - 1];

    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product]
      }
    });
  };

  increment = id => {
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
