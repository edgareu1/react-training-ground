import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/" class="home-link">
          <span>
            <i class="fas fa-mobile-alt"></i>
          </span>
        </Link>

        <ul>
          <Link to="/">Products</Link>
        </ul>

        <Link to="/cart">
          <span>
            <i class="fas fa-cart-plus" style={{paddingRight: "10px"}}></i>
            Cart
          </span>
        </Link>
      </nav>
    );
  }
}
