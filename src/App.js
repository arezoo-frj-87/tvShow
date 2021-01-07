import React, { useEffect, useContext } from "react";
import axios from "axios";
import { MovieContext } from "./Components/MovieContext";
import Movie from "./Components/Movie";
import "./Style/style.css";
import FavoriteList from "./Components/FavoriteList";
import { HashRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Header from "./Components/Header";

export default function App() {
  const [data, setData, searchValue, setsearchValue, favorites] = useContext(
    MovieContext
  );
  const getData = () => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      });
  };

  const searchData = (e) => {
    e.preventDefault();
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <HashRouter>
      <div className="search-form">
        <Switch>
          <Route exact path="/">
            <div className="head">
              <Header />
            </div>

            <form onSubmit={searchData}>
              <label>
                Search movie:{" "}
                <input
                  type="text"
                  onChange={(e) => setsearchValue(e.target.value)}
                  className="searchBox"
                />
              </label>
              <input type="submit" value="search" className="submit" />
            </form>
            <Movie data={data} />
          </Route>
          <Route path="/favorite">
            <FavoriteList data={favorites} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
