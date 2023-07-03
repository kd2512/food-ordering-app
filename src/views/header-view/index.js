import React, { useState } from "react";
import "./index.css";
import { LOGO_URL } from "../../constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");

  const handleAuthBtn = () => {
    if (authBtn === "Login") {
      setAuthBtn("Logout");
    } else {
      setAuthBtn("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-items">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-items">
            <Link to="/cart">Cart</Link>
          </li>
          <li
            className="nav-items"
            style={{ cursor: "pointer" }}
            onClick={() => handleAuthBtn()}
          >
            {authBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
