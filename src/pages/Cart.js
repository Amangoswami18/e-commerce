import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    cart.removeFromCart(id);
    toast.info("Removed from cart");
  };

  const handleBack = () => {
    navigate("/");
  };

  if (cart.cartItems.length === 0)
    return (
      <div className="text-center mt-5">
        <h3>Your cart is empty</h3>
        <p>Add some products to get started</p>
        <button className="btn btn-outline-primary mt-3" onClick={handleBack}>
          ← Back to Shop
        </button>
      </div>
    );

  return (
    <div className="container mt-4">
      <button className="btn btn-outline-secondary mb-3" onClick={handleBack}>
        ← Back to Shop
      </button>

      <h2 className="mb-4">Your Cart</h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>₹ {item.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary me-1"
                    onClick={() => cart.decrementQty(item.id)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-sm btn-outline-secondary ms-1"
                    onClick={() => cart.incrementQty(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>₹ {(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    &#10060; Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-end mt-3">
        Total: <span className="text-primary">₹ {cart.total.toFixed(2)}</span>
      </h3>
    </div>
  );
};

export default Cart;
