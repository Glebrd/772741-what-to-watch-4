import React from "react";
import PropTypes from "prop-types";

const CatalogCard = (props) => {
  const {movie, onMovieCardHover, onCardClick} = props;
  const {picture, title} = movie;

  return (
    <article
      onMouseEnter={() => {
        onMovieCardHover(movie);
      }}
      onClick={(evt) => {
        evt.preventDefault();
        onCardClick(movie);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={picture} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );

};
CatalogCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
};

export default CatalogCard;
