import { Fragment, useEffect, useState } from "react";
import LoadingShimmer from "../loading-shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../constant";
import "./index.css";
import { AiFillStar } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { NonVegIcon, VegIcon } from "../veg-nonveg-icon";
import { MENU_ITEM_IMG_BASE_URL } from "../../constant";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${MENU_API}${resId}`);
      const json = await data.json();
      setResMenu(json.data);
    };

    fetchData();
  }, []);

  console.log(resMenu);

  if (resMenu === null) return <LoadingShimmer />;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatingsString,

    costForTwoMessage,
  } = resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[resMenu?.cards?.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card;

  const resDishes = itemCards[0];

  return (
    <div className="res-menu">
      <div className="res-info-1">
        <div className="res-info-left">
          <div className="res-name">{name}</div>
          <div className="res-cuisines">{cuisines.join(", ")}</div>
          <div className="res-address">
            {areaName},{sla.lastMileTravelString}
          </div>
        </div>
        <div className="res-info-right">
          <div className="rating-box">
            <div className="res-rating">
              <AiFillStar style={{ color: "#3d9b6d" }} /> &nbsp; {avgRating}
            </div>
            <div className="res-reviews">{totalRatingsString}</div>
          </div>
        </div>
      </div>
      <hr className="res-info-separator" />
      <div className="res-info-2">
        <div className="res-cost">{costForTwoMessage}</div>
        <div className="res-sla">
          <MdWatchLater /> {sla.slaString}
        </div>
      </div>
      <div className="separator"></div>

      <div className="dishes-container" style={{ position: "relative" }}>
        <div className="category-heading">Recommended</div>
        {itemCards &&
          itemCards.map((resDishes) => (
            <Fragment key={resDishes.card.info.id}>
              <div className="dish">
                <div className="dish-details">
                  <div className="identifier-icon">
                    {resDishes.card.info.itemAttribute.vegClassifier ===
                    "VEG" ? (
                      <VegIcon />
                    ) : (
                      <NonVegIcon />
                    )}
                  </div>
                  <div className="dish-name">{resDishes.card.info.name}</div>
                  <div className="dish-price">
                    ₹{resDishes.card.info.price / 100}
                  </div>
                  {resDishes.card.info.description && (
                    <div
                      title={resDishes.card.info.description}
                      className="dish-description"
                    >
                      {resDishes.card.info.description}
                    </div>
                  )}
                </div>
                <div className="dish-image-container">
                  {resDishes.card.info.imageId && (
                    <div className="dish-image">
                      <img
                        className="image"
                        src={`${MENU_ITEM_IMG_BASE_URL}/${resDishes.card.info.imageId}`}
                      />
                    </div>
                  )}
                  <div className="add-btn-container">
                    <div className="main-btn">
                      <div className="add-btn">ADD</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator"></div>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
