import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="home-link">
          <span>
            <i className="fas fa-mobile-alt"></i>
          </span>
        </Link>

        <ul>
          <Link to="/">
            <li>Products</li>
          </Link>

          <Link to="/cart">
            <li>
              <span>
                <i className="fas fa-cart-plus"></i>
                Cart
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}
