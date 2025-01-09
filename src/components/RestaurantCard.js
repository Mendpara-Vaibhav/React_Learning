import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const {
  //   name,
  //   cuisines,
  //   avgRating,
  //   costForTwo,
  //   // deliveryTime,
  // } = resData?.card?.card?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData?.card?.card?.info.cloudinaryImageId}
      />
      <h3>{resData?.card?.card?.info.name}</h3>
      <h4>{resData?.card?.card?.info.cuisines.join(",")}</h4>
      <h4>{resData?.card?.card?.info.avgRating} stars</h4>
      <h4>₹{resData?.card?.card?.info.costForTwo / 100} FOR TWO</h4>
      <h4>{resData?.card?.card?.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
