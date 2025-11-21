import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import CartContext from "../context/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const cart = useContext(CartContext);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  const handleAdd = () => {
    cart.addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <div className="row g-4">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "contain",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "10px",
            }}
          />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <h3 className="text-primary mt-2">₹ {product.price}</h3>
          <p className="mt-3">{product.description}</p>
          <button className="btn btn-success mt-3" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
