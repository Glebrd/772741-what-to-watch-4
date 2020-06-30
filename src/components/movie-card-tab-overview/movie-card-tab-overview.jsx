import React from "react";
import PropTypes from "prop-types";

const getMovieRank = (rating) => {
  let movieRank = ``;
  if (rating === 10) {
    movieRank = `Awesome`;
  } else if (rating >= 8) {
    movieRank = `Very good`;
  } else if (rating >= 5) {
    movieRank = `Good`;
  } else if (rating >= 3) {
    movieRank = `Normal`;
  } else {
    movieRank = `Bad`;
  }
  return movieRank;
};

const MovieCardTabOverview = (props) => {
  const {rating, description, starring, director, scores} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getMovieRank(rating)}</span>
          <span className="movie-rating__count">{scores} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director } </strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} </strong></p>
      </div>
    </React.Fragment>
  );
};

MovieCardTabOverview.propTypes = {
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
  runTime: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
  }))
};

export default MovieCardTabOverview;
