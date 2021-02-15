import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="product-card">
        <h3>{title}</h3>

        <Link to={"/" + id}>
          <img src={"./images/phone-ecommerce/" + img} alt={title} />
        </Link>
      </div>
    );
  }
}
