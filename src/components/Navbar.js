import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const cart = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.count || 0;
  const totalAmount = cart.total ? cart.total.toFixed(2) : "0.00";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ShopEase
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center">
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
