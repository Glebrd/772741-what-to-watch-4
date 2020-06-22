import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const cardTitleClickHandler = () => {};

const App = (props) => {
  const {promoMovie, movies} = props;

  return (
    <Main
      promoMovie = {promoMovie}
      movies={movies}
      onCardTitleClick={cardTitleClickHandler}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

export default App;
