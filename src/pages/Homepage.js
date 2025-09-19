import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await res.json();
        setProducts(data.data); // API returns { data: [...] }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  // Filter products by search input
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Products</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image?.url}
              alt={product.image?.alt || product.title}
            />
            <h2>{product.title}</h2>
            <p>${product.discountedPrice}</p>
            <Link to={`/product/${product.id}`} className="btn primary">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
