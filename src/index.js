import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const moviesNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


ReactDOM.render(
    <App promoMovieName={promoMovie.name} promoMovieGenre={promoMovie.genre} promoMovieDate={promoMovie.date} moviesNames={moviesNames}/>,
    document.querySelector(`#root`)
);
