import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "../catalog-card/catalog-card.jsx";

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null
    };

    this._handleMovieCardHover = this._handleMovieCardHover.bind(this);
  }

  render() {
    const {movies, onCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) =>
          <CatalogCard
            key={`${movie}-${i}`}
            movie={movie}
            onMovieCardHover = {this._handleMovieCardHover}
            onCardClick = {onCardClick}
          />
        )}
      </div>
    );
  }
  _handleMovieCardHover(movie) {
    this.setState({activeMovieCard: movie});
  }
}

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Catalog;
