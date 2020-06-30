import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {

  const {movies, onCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) =>
        <CatalogCard
          key={movie.id}
          smallMovieCard={movie}
          onCardClick = {onCardClick}
        />
      )}
    </div>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    picture: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.string,
    poster: PropTypes.string,
    background: PropTypes.string,
    rating: PropTypes.number,
    scores: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    videoPreview: PropTypes.string,
  }),
  onCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
