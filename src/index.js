import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

ReactDOM.render(
    <App promoMovie={promoMovie} movies={films}/>,
    document.querySelector(`#root`)
);
