import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>✅ Order Successful!</h1>
      <p>
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <button
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "white",
          background: "#2563eb",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Back to Store
      </button>
    </div>
  );
}
