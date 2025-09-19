import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar({ products, setFiltered }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      setFiltered(products);
      return;
    }

    const matches = products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
    setFiltered(matches);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.slice(0, 5).map((s) => (
            <li key={s.id}>
              <Link to={`/product/${s.id}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
