import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const promise = fetch(MENU_API + resId);
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=47589&catalog_qa=undefined&submitAction=ENTER
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=53155&catalog_qa=undefined&submitAction=ENTER
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=506111&catalog_qa=undefined&submitAction=ENTER
    const data = await promise;
    const json = await data.json();

    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
