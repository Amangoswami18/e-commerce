import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const cart = useContext(CartContext);

  // total items and total price
  const totalItems = cart.count || 0;
  const totalAmount = cart.total ? cart.total.toFixed(2) : "0.00";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fw-bold" to="/">
          ShopEase
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary" to="/cart">
                &#128722; Cart ({totalItems}) - ₹ {totalAmount}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
