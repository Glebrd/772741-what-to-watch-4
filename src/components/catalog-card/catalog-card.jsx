import React from "react";
import PropTypes from "prop-types";

const CatalogCard = (props) => {
  const {movie, onMovieCardHover, onCardTitleClick} = props;
  const {picture, title} = movie;

  return (
    <article
      onMouseEnter={
        () => {
          onMovieCardHover(movie);
        }
      }
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={picture} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 onClick={onCardTitleClick} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );

};
CatalogCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
};

export default CatalogCard;
