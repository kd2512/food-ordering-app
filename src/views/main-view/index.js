import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/restaurant-card";
import "./index.css";
import { apiData } from "../../constant";
import { useState } from "react";

const MainView = () => {
  const [restaurantList, setRestaurantList] = useState(apiData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("json", json);

      const newData = json.data.cards.map((item) => {
        if (item.cardType === "seeAllRestaurants") {
          return item.data.data.cards;
        }
      });
      console.log(newData);
      setRestaurantList(...newData);
    };

    fetchData();
  }, []);

  return (
    <div className="main-view">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantList &&
          restaurantList.map((data, index) => (
            <RestaurantCard key={index} cardData={data.data} />
          ))}
      </div>
    </div>
  );
};

export default MainView;
