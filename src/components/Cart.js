import React, { Component } from "react";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <div className="page-content">
        <h1>Cart</h1>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Model</th>
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

        <CartTotal />
      </div>
    );
  }
}
