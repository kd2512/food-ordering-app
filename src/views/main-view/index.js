import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/restaurant-card";
import "./index.css";
import { useState } from "react";
import LoadingShimmer from "../../components/loading-shimmer";
import { MAIN_API } from "../../constant";
import { Link } from "react-router-dom";

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
      const data = await fetch(MAIN_API);
      const json = await data.json();

      const newData = json?.data?.cards
        ?.map((item) => {
          if (item.cardType === "seeAllRestaurants") {
            console.log("inside if");
            return item.data?.data?.cards;
          }
        })
        .filter((item) => item !== undefined);
      console.log(newData);
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
      {restaurantList?.length > 0 ? (
        <div className="restaurant-container">
          {searchTerm || searchResults.length > 0
            ? searchResults.map((data, index) => (
                <Link to={`restaurants/${data.data.id}`}>
                  <RestaurantCard key={data.data.id} cardData={data.data} />
                </Link>
              ))
            : restaurantList.map((data, index) => (
                <Link to={`restaurants/${data.data.id}`}>
                  <RestaurantCard key={data.data.id} cardData={data.data} />
                </Link>
              ))}
        </div>
      ) : (
        <LoadingShimmer />
      )}
    </div>
  );
};

export default MainView;
