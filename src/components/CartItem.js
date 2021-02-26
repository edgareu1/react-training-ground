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
            <tr>
              <td>
                <img
                  src={"./images/phone-ecommerce/" + img}
                  alt={title}
                  style={{width: "80px", height: "80px"}}
                />
              </td>

              <td><p>{title}</p></td>
              <td><p>{price}</p></td>

              <td style={{display: "flex", justifyContent: "space-around"}}>
                <button onClick={() => { decrement(id) }}>-</button>
                <p>{count}</p>
                <button onClick={() => { increment(id) }}>+</button>
              </td>

              <td>
                <button onClick={() => { remove(id) }}>Remove</button>
              </td>

              <td><p>{total}</p></td>
            </tr>
          )
        }}
      </ProductConsumer>
    );
  }
}
