import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list.jsx";
import CatalogGenresList from "../catalog-genres-list/catalog-genres-list.jsx";
import {movieType} from "../../types";
import CatalogButton from "../catalog-button/catalog-button.jsx";
import {ActionCreator} from "../../reducer/application/application";
// import history from "../../history";

import {
  getCurrentGenre,
  getFilteredMovies,
  getGenres,
  getNumberOfMoviesOnMain
} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import UserBlock from "../user-block/user-block.jsx";
import {Link} from "react-router-dom";

const Main = (props) => {
  const {currentMovie, filteredMovies, numberOfMoviesOnMain, genres, onGenreChange, history, onPlayClick} = props;
  const {title, genre, date, background, poster} = currentMovie;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link"> <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span> </a>
          </div>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/films/${currentMovie.id}/player`}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" widtth="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList
            onGenreChange={onGenreChange}
            genres={genres}
          />

          <MoviesList
            movies = {filteredMovies.slice(0, numberOfMoviesOnMain)}
          />

          <div className="catalog__more">
            {numberOfMoviesOnMain <= filteredMovies.length
            && <CatalogButton/>}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light"> <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span> </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  filteredMovies: getFilteredMovies(state),
  currentMovie: getPromoMovie(state),
  currentGenre: getCurrentGenre(state),
  numberOfMoviesOnMain: getNumberOfMoviesOnMain(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
  },
  onPlayClick(currentMovie) {
    dispatch(ActionCreator.setCurrentMovie(currentMovie));
  },
});

Main.propTypes = {
  filteredMovies: PropTypes.arrayOf(movieType),
  currentMovie: movieType,
  currentGenre: PropTypes.string,
  numberOfMoviesOnMain: PropTypes.number,
  genres: PropTypes.object,
  onGenreChange: PropTypes.func,
  onPlayClick: PropTypes.func,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
