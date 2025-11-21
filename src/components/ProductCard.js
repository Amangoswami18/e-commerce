import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card h-100 shadow-sm"
      style={{
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "contain", padding: "10px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
          {product.title}
        </h5>
        <p className="card-text" style={{ fontWeight: "bold", marginBottom: "auto" }}>
          ₹ {product.price}
        </p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
