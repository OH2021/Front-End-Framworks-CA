import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { id, title, image, discountedPrice, price } = product;

  const discount =
    price > discountedPrice
      ? Math.round(((price - discountedPrice) / price) * 100)
      : null;

  return (
    <div className="product-card">
      <img src={image?.url} alt={image?.alt || title} />
      <h2>{title}</h2>
      <p className="price">
        {discount ? (
          <>
            <span className="old-price">${price}</span>
            <span className="discounted-price">${discountedPrice}</span>
            <span className="discount">-{discount}%</span>
          </>
        ) : (
          <span>${price}</span>
        )}
      </p>
      <Link to={`/product/${id}`} className="btn primary">
        View Product
      </Link>
    </div>
  );
}
