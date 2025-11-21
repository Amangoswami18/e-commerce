import React, { useEffect, useState, useContext } from "react";
import { fetchProducts, fetchCategories } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import CartContext from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Fetch categories once
  useEffect(() => {
    const getCategories = async () => {
      const list = await fetchCategories();
      setCategories(list);
    };

    getCategories();
    loadProducts("all");
  }, []);

  // Reload products 
  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory]);

  const loadProducts = async (category) => {
    setLoading(true);
    const data = await fetchProducts(category);
    setProducts(data);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <select
          className="form-select shadow-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <h4 className="text-center mt-5">Loading...</h4>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
