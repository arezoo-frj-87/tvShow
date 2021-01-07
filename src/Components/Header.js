import React from "react";
import "../Style/style.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <p style={{ color: "lightblue" }}>Main Page</p>
        </Link>
        <Link to="/favorite">
          <p style={{ color: "lightblue" }}>Favorite List</p>
        </Link>
      </div>
    </div>
  );
}
