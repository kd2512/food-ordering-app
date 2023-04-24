import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./views/header-view";
import MainView from "./views/main-view";
import "./App.css";

/**
 * Header
 *  - Logo
 *  - nav links
 *
 * Body
 *  - Search Component
 *  - Restaurant-container
 *    - Restaurant cards
 *
 * Footer
 *  - Copyright
 *  - Contact info
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainView />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
