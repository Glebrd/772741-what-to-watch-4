import React from "react";
import PropTypes from "prop-types";

export const UserRatingName = {
  AWESOME: `Awesome`,
  VERY_GOOD: `Very good`,
  GOOD: `Good`,
  NORMAL: `Normal`,
  BAD: `Bad`,
};

export const RatingValue = {
  MINIMUM_AWESOME: 19,
  MINIMUM_VERY_GOOD: 8,
  MINIMUM_GOOD: 5,
  MINIMUM_NORMAL: 3,
};

const getMovieRank = (rating) => {
  let movieRank = ``;
  if (rating === RatingValue.MINIMUM_AWESOME) {
    movieRank = UserRatingName.AWESOME;
  } else if (rating >= RatingValue.MINIMUM_VERY_GOOD) {
    movieRank = UserRatingName.VERY_GOOD;
  } else if (rating >= RatingValue.MINIMUM_GOOD) {
    movieRank = UserRatingName.GOOD;
  } else if (rating >= RatingValue.MINIMUM_NORMAL) {
    movieRank = UserRatingName.NORMAL;
  } else {
    movieRank = UserRatingName.BAD;
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
  rating: PropTypes.number,
  scores: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
};

export default MovieCardTabOverview;
