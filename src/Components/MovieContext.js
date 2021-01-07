import React, { useState, createContext } from "react";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [data, setData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [favorites, setfavorites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  return (
    <MovieContext.Provider
      value={[
        data,
        setData,
        searchValue,
        setsearchValue,
        favorites,
        setfavorites,
      ]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
