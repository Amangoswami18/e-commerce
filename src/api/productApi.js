import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// Fetch all products or by category
export const fetchProducts = async (category = "all") => {
  try {
    const url =
      category === "all"
        ? `${BASE_URL}/products`
        : `${BASE_URL}/products/category/${category}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch product categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
