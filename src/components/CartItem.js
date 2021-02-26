import React, { Component } from "react";
import { ProductConsumer } from "../context.js";

export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;

    return (
      <ProductConsumer>
        {value => {
          const { increment, decrement, remove } = value;

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
              <button onClick={() => { decrement(id) }}>-</button>
              <p>{count}</p>
              <button onClick={() => { increment(id) }}>+</button>
              <button onClick={() => { remove(id) }}>Remove</button>
              <p>{total}</p>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
