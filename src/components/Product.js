import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context.js";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="product-card">
              <h3>{title}</h3>

              <Link to={"/" + id}>
                <img src={"./images/phone-ecommerce/" + img} alt={title} />
              </Link>

              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => { value.addToCart(id) }}
              >
                {inCart ? (
                  <p>in cart</p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
