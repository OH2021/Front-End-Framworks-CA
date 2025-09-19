import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  function handleCheckout() {
    navigate("/checkout-success");
  }

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <ul className="cart-list">
        {cart.map((item, i) => (
          <li key={i} className="cart-item">
            <img src={item.image?.url} alt={item.image?.alt || item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>${item.discountedPrice}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="btn primary" onClick={handleCheckout}>
        Complete Checkout
      </button>
    </div>
  );
}
