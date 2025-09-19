import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const { title, description, image, price, discountedPrice, reviews } =
    product;
  const discount =
    price > discountedPrice
      ? Math.round(((price - discountedPrice) / price) * 100)
      : null;

  return (
    <div className="container">
      <h1>{title}</h1>
      <img
        src={image?.url}
        alt={image?.alt || title}
        style={{ maxWidth: "400px" }}
      />
      <p>{description}</p>
      <p>
        {discount ? (
          <>
            <span
              style={{ textDecoration: "line-through", marginRight: "0.5rem" }}
            >
              ${price}
            </span>
            <strong>${discountedPrice}</strong> (-{discount}%)
          </>
        ) : (
          <strong>${price}</strong>
        )}
      </p>
      <button className="btn primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((r, i) => (
            <li key={i}>
              <strong>{r.username}:</strong> {r.description} ⭐{r.rating}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
