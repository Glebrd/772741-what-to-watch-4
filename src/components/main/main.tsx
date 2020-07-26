import * as React from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import CatalogGenresList from "../catalog-genres-list/catalog-genres-list";
import {MovieType} from "../../types";
import CatalogButton from "../catalog-button/catalog-button";
import {ActionCreator} from "../../reducer/application/application";
import history from "../../history";
import {
  getCurrentGenre,
  getFilteredMovies,
  getGenres,
  getNumberOfMoviesOnMain
} from "../../reducer/application/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import UserBlock from "../user-block/user-block";
import {Operation} from "../../reducer/data/data";
import {AppRoute} from "../../const";

const getSvgIconMyList = (isFavorite) =>
  isFavorite
    ? `#in-list`
    : `#add`;

interface Props {
  filteredMovies: [MovieType];
  currentMovie: MovieType;
  currentGenre: string;
  numberOfMoviesOnMain: number;
  genres: string[];
  onGenreChange: (genre: string) => {void};
  onPlayClick: () => {};
  onButtonListClick: (currentMovie) => {};
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {currentMovie, filteredMovies, numberOfMoviesOnMain, genres, onGenreChange, onButtonListClick} = props;
  const {title, genre, date, background, poster, isFavorite} = currentMovie;

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
            movies={filteredMovies.slice(0, numberOfMoviesOnMain)}
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
  onButtonListClick(movie) {
    dispatch(Operation.changeFavoriteStatus(movie));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
