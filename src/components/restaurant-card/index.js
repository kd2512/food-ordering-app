import React from "react";
import "./index.css";
import { MdLocalOffer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = ({ cardData }) => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cardData.cloudinaryImageId}`}
        alt="food-logo"
      />
      <div className="card-desc">
        <div className="card-title">{cardData.name}</div>
        <div className="card-cuisine">{cardData.cuisines.join(",")}</div>
      </div>
      <div className="card-assets">
        <div className="card-rating">
          <span className="icon-star">
            <AiFillStar />
          </span>
          <span>{cardData.avgRating}</span>
        </div>
        <div>•</div>
        <div className="card-timing">{cardData.slaString}</div>
        <div>•</div>
        <div>{cardData.costForTwoString}</div>
      </div>
      <div className="card-offers">
        <MdLocalOffer style={{ marginRight: "5px" }} /> Exciting Offers
      </div>
      <div className="card-action-button-container">
        <span role="button" aria-label="Open" className="action-button">
          Quick View
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
