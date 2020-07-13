import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";
import MovieCardTabs from "../movie-card-tabs/movie-card-tabs.jsx";
import {connect} from "react-redux";
import {movieType} from "../../types";
import {ActionCreator} from "../../reducer/application/application";
import {ScreenType} from "../../const";
import {getCurrentMovie} from "../../reducer/data/selectors";
import {getSameGenreMovies} from "../../reducer/application/selectors";

const MoviePage = (props) => {
  const {currentMovie, sameGenreMovies, onPlayClick} = props;
  const {title, genre, date, poster, background, backgroundColor} = currentMovie;

  return (
    <React.Fragment>
      <section
        style={{backgroundColor}}
        className="movie-card movie-card--full"
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title"> {title} </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick = {onPlayClick}
                  className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt="The Grand Budapest Hotel poster" width="218"
                height="327"/>
            </div>
            <MovieCardTabs
              movie = {currentMovie}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            movies = {sameGenreMovies}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
  sameGenreMovies: getSameGenreMovies(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick() {
    dispatch(ActionCreator.setCurrentScreen(ScreenType.PLAYER));
  },
});

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  currentMovie: movieType,
  onPlayClick: PropTypes.func,
};

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
