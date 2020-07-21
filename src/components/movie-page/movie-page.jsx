import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";
import MovieCardTabs from "../movie-card-tabs/movie-card-tabs.jsx";
import {connect} from "react-redux";
import {movieType, userType} from "../../types";
import {ActionCreator} from "../../reducer/application/application";
import {Operation} from "../../reducer/data/data";
import {ScreenType} from "../../const";
import {getCurrentMovie, getCurrentMovieByID, getSameGenreMovies} from "../../reducer/application/selectors";
import UserBlock from "../user-block/user-block.jsx";
import {getUser} from "../../reducer/user/selectors";
import {checkIfObjectEmpty} from "../../utils";
import {getMovies} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";

const getSvgIconMyList = (isFavorite) =>
  isFavorite
    ? `#in-list`
    : `#add`;

const MoviePage = (props) => {
  const {currentMovie, sameGenreMovies, changeFavoriteStatus, user, history} = props;
  const {title, genre, date, poster, background, backgroundColor, isFavorite} = currentMovie;
  console.log(history);
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
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title"> {title} </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/films/${currentMovie.id}/player`}>
                  <button
                  // onClick = {onPlayClick}
                    className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button
                  onClick={() => {changeFavoriteStatus(currentMovie)}}
                  className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={getSvgIconMyList(isFavorite)}></use>
                  </svg>
                  <span>My list</span>
                </button>
                {checkIfObjectEmpty(user)
                  ? <Link to={`/films/${currentMovie.id}/review`} href="add-review.html" className="btn movie-card__button">Add review</Link>
                  : ``
                }
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

const mapStateToProps = (state, props) => {
  const currentMovie = getCurrentMovieByID(state, props.match.params.id);
  return {
    currentMovie,
    sameGenreMovies: getSameGenreMovies(state, currentMovie),
    user: getUser(state),
    // currentMovie: getMovies(state).find((x) => x.id === parseInt(props.match.params.id, 10)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteStatus(movie) {
    dispatch(Operation.changeFavoriteStatus(movie));
  },
});


MoviePage.propTypes = {
  sameGenreMovies: PropTypes.arrayOf(movieType),
  currentMovie: movieType,
  onPlayClick: PropTypes.func,
  user: userType,
};

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
