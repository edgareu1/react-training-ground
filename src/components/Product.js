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
              <div className="product-card pos-rel">
                <h3 className="prod-text pos-abs pos-top pos-left">
                  {title.toUpperCase()}
                </h3>

                <Link to={"/product/" + id} className="cart-img">
                  <img src={"./images/phone-ecommerce/" + img} alt={title} />
                </Link>

                <p className="prod-text pos-abs pos-bot pos-left">
                  {Number(price).toFixed(2)} €
                </p>

                <button
                  className="prod-text cart-btn pos-abs pos-bot pos-right"
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
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
