import {getMovies, getCurrentMovie} from "../data/selectors";
import {createSelector} from "reselect";

const sameGenreMoviesProperties = {
  MIN_LENGTH: 0,
  MAX_LENGTH: 3,
};

export const getCurrentScreen = (state) => state.application.currentScreen;
export const getCurrentGenre = (state) => state.application.currentGenre;
export const getNumberOfMoviesOnMain = (state) => state.application.numberOfMoviesOnMain;

export const getSameGenreMovies = createSelector(
    getMovies, getCurrentMovie,
    (movies, movie) =>
      movies
      .filter(({id, genre}) => id !== movie.id && genre === movie.genre)
      .slice(sameGenreMoviesProperties.MIN_LENGTH, sameGenreMoviesProperties.MAX_LENGTH)
);

// export const getSameGenreMovies = (movies, movie) =>
//   movies
//     .filter(({id, genre}) => id !== movie.id && genre === movie.genre)
//     .slice(sameGenreMoviesProperties.MIN_LENGTH, sameGenreMoviesProperties.MAX_LENGTH);

export const getFilteredMovies = createSelector(
    getMovies, getCurrentGenre,
    (movies, currentGenre) => {
      return currentGenre === `All genres`
        ? movies
        : movies.filter((movie) => movie.genre === currentGenre);
    }
);

export const getGenres = createSelector(
    getMovies,
    (movies) => {
      const genresSet = new Set([`All genres`]);
      for (let movie of movies) {
        genresSet.add(movie.genre);
        if (genresSet.size === 10) {
          break;
        }
      }
      return genresSet;
    }
);


