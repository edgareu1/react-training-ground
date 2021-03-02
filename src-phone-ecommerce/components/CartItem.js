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

              <td><p>{title.toUpperCase()}</p></td>
              <td><p>{Number(price).toFixed(2)} €</p></td>

              <td>
                <div className="field-button">
                  <button onClick={() => { decrement(id) }}>-</button>
                  <p>{count}</p>
                  <button onClick={() => { increment(id) }}>+</button>
                </div>
              </td>

              <td>
                <div className="field-button">
                  <button onClick={() => { remove(id) }}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>

              <td><p>{Number(total).toFixed(2)} €</p></td>
            </tr>
          )
        }}
      </ProductConsumer>
    );
  }
}
