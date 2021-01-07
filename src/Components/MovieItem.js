import React, { useState, useContext, useEffect } from "react";
import "../Style/style.css";
import Default from "../Image/Default.jpg";
import Heart from "react-animated-heart";
import { MovieContext } from "./MovieContext";
export default function MovieItem({ movie }) {
  const [isClick, setClick] = useState(false);
  const [, , , , favorites, setfavorites] = useContext(MovieContext);

  const addFavorite = () => {
    if (!favorites.some((f) => f.show.id === movie.show.id)) {
      setfavorites([...favorites, movie]);
      setClick(true);
      localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
    } else {
      const filteredFavorites = favorites.filter((item) => {
        return item.show.id !== movie.show.id;
      });
      setfavorites(filteredFavorites);
      setClick(false);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    }
  };

  useEffect(() => {
    if (favorites.some((f) => f.show.id === movie.show.id)) {
      setClick(true);
    }
  }, []);

  return (
    <div className="show-items">
      <div key={movie.show.id}>
        {movie.show.image === null ? (
          <img src={Default} alt="withoutPicture"></img>
        ) : (
          <img src={movie.show.image.medium} alt="moviepicture"></img>
        )}

        <p>{movie.show.name}</p>
        <p>Language: {movie.show.language}</p>
        <p>Genres: {movie.show.genres[0]}</p>
        <p>
          Rating:
          {movie.show.rating.average === null ? "0" : movie.show.rating.average}
        </p>
        <span className="buttons">
          <button className="seeMovie">
            <a href={movie.show.url}>watch Now!</a>
          </button>

          <Heart isClick={isClick} onClick={addFavorite} />
        </span>
      </div>
    </div>
  );
}
