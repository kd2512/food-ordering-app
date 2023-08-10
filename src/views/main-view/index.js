import React, { useEffect, useState } from "react";
import RestaurantCard from "../../components/restaurant-card";
import "./index.css";
import { useState } from "react";
import LoadingShimmer from "../../components/loading-shimmer";
import { MAIN_API } from "../../constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const MainView = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onlineStatus = useOnlineStatus();

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
      item.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MAIN_API);
      const json = await data.json();

      console.log("json", json);

      const newData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("new data", newData);

      setRestaurantList(newData);
    };

    fetchData();
  }, []);

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );
  }

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
                <Link to={`restaurants/${data.info.id}`}>
                  <RestaurantCard key={data.info.id} cardData={data.info} />
                </Link>
              ))
            : restaurantList.map((data, index) => (
                <Link to={`restaurants/${data.info.id}`}>
                  <RestaurantCard key={data.info.id} cardData={data.info} />
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
