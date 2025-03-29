import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const promise = fetch(MENU_API + resId);
  //   const data = await promise;
  //   const json = await data.json();
  //   // console.log(json);

  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // RestaurantCategory is a controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
