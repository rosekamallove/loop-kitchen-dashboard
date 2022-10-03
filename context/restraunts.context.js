import Cookies from "js-cookie";
import React, { useContext, useState } from "react";

export const RestaurantsContext = React.createContext({
  bookmarked: undefined,
  liked: undefined,
  setBookmarked: () => "",
  setLiked: () => "",
});

export const {
  bookmarked,
  liked,
  setBookmarked,
  setLiked,
} = () => useContext(RestaurantsContext);

export const RestaurantProvider = ({ children }) => {
  const [bookmarked, setBookmarked] = useState(
    Cookies.get("Bookmarked") ? Cookies.get("Bookmarked").split(",") : []
  );

  const [liked, setLiked] = useState(
    Cookies.get("Liked") ? Cookies.get("Liked").split(",") : []
  );

  return (
    <RestaurantsContext.Provider
      value={{ bookmarked, setBookmarked, liked, setLiked }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
