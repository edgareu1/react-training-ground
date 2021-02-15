import React, { Component } from "react";
import { ProductConsumer } from "../context.js";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div>
              <h3>{title}</h3>

              <img src={"./images/phone-ecommerce/" + img} alt={title} />

              <div>
                <h4>Made by:</h4>
                <p>{company}</p>
              </div>

              <div>
                <h4>Price:</h4>
                <p>{price}</p>
              </div>

              <p>{info}</p>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
