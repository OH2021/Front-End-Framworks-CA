import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartIcon() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart"); // navigate to cart page
  };

  return (
    <div
      className="cart-icon"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      🛒 {cart.length}
    </div>
  );
}
