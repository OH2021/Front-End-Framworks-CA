import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          MyStore
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <CartIcon /> {/* CartIcon handles navigation internally */}
        </nav>
      </div>
    </header>
  );
}
