// import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{resData?.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Functions
// input - RestaurantCard ==>> RestaurantCardOpened

export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white font-bold m-2 p-2 rounded-lg">
          Opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
