import React from "react";
import "./index.css";
import { LOGO_URL } from "../../constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
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
