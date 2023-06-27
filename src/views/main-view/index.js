import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/restaurant-card";
import "./index.css";
import { useState } from "react";
import LoadingShimmer from "../../components/loading-shimmer";

const MainView = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterResults(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterResults(searchTerm);
  };

  const filterResults = (searchValue) => {
    const filteredResults = restaurantList?.filter((item) =>
      item.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const newData = json?.data?.cards?.map((item) => {
        if (item.cardType === "seeAllRestaurants") {
          return item.data?.data?.cards;
        }
      });
      setRestaurantList(...newData);
    };

    fetchData();
  }, []);

  return (
    <div className="main-view">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          &nbsp;
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {restaurantList.length > 0 ? (
        <div className="restaurant-container">
          {searchTerm || searchResults.length > 0
            ? searchResults.map((data, index) => (
                <RestaurantCard key={index} cardData={data.data} />
              ))
            : restaurantList.map((data, index) => (
                <RestaurantCard key={index} cardData={data.data} />
              ))}
        </div>
      ) : (
        <LoadingShimmer />
      )}
    </div>
  );
};

export default MainView;
