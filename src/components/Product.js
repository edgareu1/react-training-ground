import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="product-card">
        <h3>{title}</h3>
        <img src={"./images/phone-ecommerce/" + img} alt={title} />
      </div>
    );
  }
}
