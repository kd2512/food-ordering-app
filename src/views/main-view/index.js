import React from "react";
import RestaurantCard from "../../components/restaurant-card";
import "./index.css";
import { apiData } from "../../constant";

const MainView = () => {
  return (
    <div className="main-view">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {apiData.map((data, index) => (
          <RestaurantCard key={index} cardData={data.data} />
        ))}
      </div>
    </div>
  );
};

export default MainView;
