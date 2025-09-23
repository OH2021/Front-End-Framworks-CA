import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once when the component mounts

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>✅ Order Successful!</h1>
      <p>
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/"
        style={{
          marginTop: "1.5rem",
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "white",
          background: "#2563eb",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Back to Store
      </Link>
    </div>
  );
}
