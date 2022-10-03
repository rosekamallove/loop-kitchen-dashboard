import Cookies from "js-cookie";
import React, { useContext, useState } from "react";

export const getLoggedIn = () =>
  Cookies.get("loggedIn") === "true" ? true : false;

export const UserContext = React.createContext({
  loggedIn: getLoggedIn(),
  setLoggedIn: () => "",
});

export const { loggedIn, setLoggedIn } = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(getLoggedIn());
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
