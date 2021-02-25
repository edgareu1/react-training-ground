import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>

        <ProductConsumer>
          {value => {
            return value.cart.map(product => {
              return <CartItem key={product.id} item={product} />;
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}
