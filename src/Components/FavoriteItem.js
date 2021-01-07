import React, { useState } from "react";
import "../Style/style.css";
import Default from "../Image/Default.jpg";
import Heart from "react-animated-heart";
export default function FavoriteItem({ movie }) {
  const [isClick, setClick] = useState(true);

  return (
    <div className="show-items">
      <div key={movie.show.id}>
        {movie.show.image === null ? (
          <img src={Default} alt="withoutPicture"></img>
        ) : (
          <img src={movie.show.image.medium} alt="moviepicture"></img>
        )}

        <p>{movie.show.name}</p>
        <p>Language:{movie.show.language}</p>
        <p>Genres:{movie.show.genres[0]}</p>
        <p>
          Rating:
          {movie.show.rating.average === null ? "0" : movie.show.rating.average}
        </p>
        <span className="buttons">
          <button className="seeMovie">
            <a href={movie.show.url}>watch Now!</a>
          </button>
          <Heart isClick={isClick} />
        </span>
      </div>
    </div>
  );
}
