import React from "react";
import "../Style/style.css";

import MovieItem from "./MovieItem";
export default function Movie(data) {
  return (
    <div>
      {data.data.map((movie) => {
        return <MovieItem key={movie.show.id} movie={movie} />;
      })}
    </div>
  );
}
