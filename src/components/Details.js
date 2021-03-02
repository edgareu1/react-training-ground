import React, { Component } from "react";
import { ProductConsumer } from "../context.js";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const paramId = parseInt(this.props.match.params.id);

          if (value.products[paramId - 1]) {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.products[paramId - 1];

            return (
              <div className="page-content">
                <h1>{title}</h1>

                <div className="single-product">
                  <img
                    src={"../images/phone-ecommerce/" + img}
                    alt={title}
                    className="float-el"
                  />

                  <div className="product-details float-el">
                    <h4>
                      <strong>Model: </strong>
                      {title.toUpperCase()}
                    </h4>

                    <h6>
                      <strong>Made by: </strong>
                      {company.toUpperCase()}
                    </h6>

                    <h6>
                      <strong>Price: </strong>
                      {Number(price).toFixed(2)} €
                    </h6>

                    <h6>More Info:</h6>
                    <p>{info}</p>

                    <button
                      className="prod-text cart-btn"
                      disabled={inCart ? true : false}
                      onClick={() => { value.addToCart(id) }}
                      style={{
                        marginTop: "10px",
                        float: "right"
                      }}
                    >
                      {inCart ? (
                        <p>in cart</p>
                      ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="page-content">
                <h1>Product does not exist</h1>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
