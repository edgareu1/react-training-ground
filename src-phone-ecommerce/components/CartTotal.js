import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class CartTotal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cartSubTotal, cartTax, cartTotal } = value;

          return (
            <div className="cart-total">
              <button
                className="cart-total-btn"
                id="btn-clear-cart"
                onClick={value.clearCart}
              >
                Clear Cart
              </button>

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

              <button
                className="cart-total-btn"
                id="btn-checkout"
                onClick={value.checkoutCart}
              >
                Checkout
              </button>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
