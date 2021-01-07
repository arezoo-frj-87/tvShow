import React from "react";
import "../Style/style.css";
import Header from "./Header";
import MovieItem from "./MovieItem";
export default function FavoriteList({ data }) {
  return (
    <div>
      <div>
        <Header />
      </div>

      {data.map((movie) => {
        return <MovieItem key={movie.show.id} movie={movie} />;
      })}
    </div>
  );
}
