import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const cardTitleClickHandler = () => {};

const App = (props) => {
  const {promoMovieName, promoMovieGenre, promoMovieDate, moviesNames} = props;

  return (
    <Main
      promoMovieName={promoMovieName}
      promoMovieGenre={promoMovieGenre}
      promoMovieDate={promoMovieDate}
      moviesNames={moviesNames}
      onCardTitleClick={cardTitleClickHandler}
    />
  );
};

App.propTypes =
  {
    promoMovieName: PropTypes.string.isRequired,
    promoMovieGenre: PropTypes.string.isRequired,
    promoMovieDate: PropTypes.string.isRequired,
    moviesNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  };

export default App;
