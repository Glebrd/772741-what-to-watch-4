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
    const {movies, onCardTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) =>
          <CatalogCard
            key={`${movie}-${i}`}
            movie={movie}
            onMovieCardHover = {this._handleMovieCardHover}
            onCardTitleClick = {onCardTitleClick}
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
  onCardTitleClick: PropTypes.func.isRequired
};

export default Catalog;
