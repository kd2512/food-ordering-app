import { useState, useEffect } from "react";
import { MENU_API } from "../constant";

const useRestaurantInfo = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${MENU_API}${resId}`);
      const json = await data.json();

      console.log("menu", json);

      setResMenu(json.data);
    };

    fetchData();
  }, []);

  return resMenu;
};

export default useRestaurantInfo;
