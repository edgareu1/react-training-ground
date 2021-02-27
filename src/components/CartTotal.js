import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class CartTotal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cartSubTotal, cartTax, cartTotal } = value;

          return (
            <div style={{textAlign: "right", paddingRight: "20px"}}>
              <h5>
                <span>Subtotal: </span>
                <strong>{Number(cartSubTotal).toFixed(2)} €</strong>
              </h5>
              <h5>
                <span>Tax: </span>
                <strong>{Number(cartTax).toFixed(2)} €</strong>
              </h5>
              <h5>
                <span>Total: </span>
                <strong>{Number(cartTotal).toFixed(2)} €</strong>
              </h5>

              <button id="checkout">Checkout</button>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
