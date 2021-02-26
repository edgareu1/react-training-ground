import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>

        <table
          style={{
            width: "100%",
            "-webkit-border-vertical-spacing": "25px"
          }}
        >
          <thead>
            <tr>
              <th colSpan="2">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <ProductConsumer>
              {value => {
                return value.cart.map(product => {
                  return <CartItem key={product.id} item={product} />;
                });
              }}
            </ProductConsumer>
          </tbody>
        </table>
      </div>
    );
  }
}
