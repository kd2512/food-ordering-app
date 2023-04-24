import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg"
          alt="app-logo"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Contact</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
