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
  };

  setProducts = () => {
    let products = [];

    storeProducts.forEach((item) => {
      products = [...products, item];
    });

    this.setState(() => {
      return { products };
    });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  }

  addToCart = id => {
    const tempProducts = [...this.state.products],
      product = tempProducts[id - 1];

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
    const tempCart = [...this.state.cart],
      product = this.getItem(id);

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    });
  };

  decrement = id => {
    const tempCart = [...this.state.cart],
      product = this.getItem(id);

    product.count = product.count - 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    });
  };

  remove = id => {
    let tempCart = [...this.state.cart];
    const tempProducts = [...this.state.products],
      removedProduct = this.getItem(id);

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => item.id !== id);

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
