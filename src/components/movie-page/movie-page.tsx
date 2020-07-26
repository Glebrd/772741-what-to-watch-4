import * as React from "react";
import MoviesList from "../movies-list/movies-list";
import PropTypes from "prop-types";
import MovieCardTabs from "../movie-card-tabs/movie-card-tabs";
import {connect} from "react-redux";
import {movieType, userType} from "../../types";
import {Operation} from "../../reducer/data/data";
import {getCurrentMovieByID, getSameGenreMovies} from "../../reducer/application/selectors";
import UserBlock from "../user-block/user-block";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import history from "../../history";
import {AppRoute} from "../../const";

const getSvgIconMyList = (isFavorite) =>
  isFavorite
    ? `#in-list`
    : `#add`;

const MoviePage = (props) => {
  const {currentMovie, sameGenreMovies, onButtonListClick, authorizationStatus} = props;
  const {title, genre, date, poster, background, backgroundColor, isFavorite} = currentMovie;
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
              <Link to={AppRoute.ROOT} className="logo__link">
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
                <button
                  onClick={() => {
                    history.push(AppRoute.MOVIES + currentMovie.id + AppRoute.PLAYER);
                  }}
                  className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  onClick={() => {
                    onButtonListClick(currentMovie);
                  }}
                  className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={getSvgIconMyList(isFavorite)}></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={AppRoute.MOVIES + currentMovie.id + AppRoute.REVIEW} href="add-review.html" className="btn movie-card__button">Add review</Link>
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
              movie={currentMovie}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            movies={sameGenreMovies}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  sameGenreMovies: PropTypes.arrayOf(movieType),
  currentMovie: movieType,
  onPlayClick: PropTypes.func,
  user: userType,
  onButtonListClick: PropTypes.func,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  const currentMovie = getCurrentMovieByID(state, props.match.params.id);
  return {
    currentMovie,
    sameGenreMovies: getSameGenreMovies(state, currentMovie),
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onButtonListClick(movie) {
    dispatch(Operation.changeFavoriteStatus(movie));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
