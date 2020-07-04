import React from "react";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export const getGenres = (state) => {
  const genresSet = new Set([`All genres`]);
  state.movies.forEach((movie) => genresSet.add(movie.genre));
  return genresSet;
};

const CatalogGenresList = (props)=>{
  const {currentGenre, onChange, genres} = props;
  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => {
        return (
          <li
            key={genre}
            className= {`catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
          >
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onChange(genre);
              }}

            >{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
  },
});

CatalogGenresList.propTypes = {
  currentGenre: PropTypes.string,
  genres: PropTypes.object,
  onChange: PropTypes.func,
};

export {CatalogGenresList};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogGenresList);
