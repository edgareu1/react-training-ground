import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "50px"
        }}
      >
        <img
          src={"./images/phone-ecommerce/" + img}
          alt={title}
          style={{width: "80px", height: "80px"}}
        />
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
        <p>{total}</p>
      </div>
    );
  }
}
