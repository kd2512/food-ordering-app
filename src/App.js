import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return <div className="app">I am from App</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);