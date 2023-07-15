import React from "react";
import "./index.css";
import { MdLocalOffer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { RES_CARD_IMG_BASE_URL } from "../../constant";

const RestaurantCard = ({ cardData }) => {
  return (
    <div>
      {cardData && (
        <div className="card-container">
          {cardData && cardData.cloudinaryImageId ? (
            <img
              className="card-image"
              src={`${RES_CARD_IMG_BASE_URL}/${cardData.cloudinaryImageId}`}
              alt="food-logo"
            />
          ) : (
            <img
              className="card-image"
              src={`https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png`}
              alt="food-logo"
            />
          )}
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
      )}
    </div>
  );
};

export default RestaurantCard;
