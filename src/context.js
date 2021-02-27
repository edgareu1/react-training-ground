import React, { Component } from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
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
      const singleItem = {
        ...item,
        inCart: false,
        count: 0,
        total: 0
      };
      products = [...products, singleItem];
    });

    this.setState(() => {
      return { products };
    });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

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
    }, this.setTotals);
  };

  increment = id => {
    const tempCart = [...this.state.cart],
      product = this.getItem(id);

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    }, this.setTotals);
  };

  decrement = id => {
    const tempCart = [...this.state.cart],
      product = this.getItem(id);

    product.count = product.count - 1;

    if (product.count === 0) {
      this.remove(id);
    } else {
      product.total = product.count * product.price;

      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.setTotals);
    }
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
    }, this.setTotals);
  };

  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    }, () => {
      this.setProducts();
      this.setTotals();
    });
  };

  setTotals = () => {
    const taxRate = 0.2,
      newCartSubtotal = this.state.cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total;
      }, 0);

    this.setState(() => {
      return {
        cartSubTotal: newCartSubtotal,
        cartTax: newCartSubtotal * taxRate,
        cartTotal: newCartSubtotal * (1 + taxRate)
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
          remove: this.remove,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
