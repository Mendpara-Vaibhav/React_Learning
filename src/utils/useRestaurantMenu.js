import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // const data = await promise;
    const json = await data.json();
    // console.log(json.data);

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
