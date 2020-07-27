import {getMovies} from "../data/selectors";
import {createSelector} from "reselect";

const sameGenreMoviesProperties = {
  MIN_LENGTH: 0,
  MAX_LENGTH: 3,
};

export const getCurrentGenre = (state) => state.application.currentGenre;
export const getNumberOfMoviesOnMain = (state) => state.application.numberOfMoviesOnMain;
export const getCurrentMovie = (state) => state.application.currentMovie;
export const getCurrentMovieByID = (state, currentMovieID) => state.data.movies.find((movie) => movie.id === parseInt(currentMovieID, 10));

export const getSameGenreMovies = (state, currentMovie) =>
{
  console.log(currentMovie)
  state.data.movies
  .filter(({id, genre}) => id !== currentMovie.id && genre === currentMovie.genre)
  .slice(sameGenreMoviesProperties.MIN_LENGTH, sameGenreMoviesProperties.MAX_LENGTH);
}
export const getFavoriteMovies = (state) =>
  state.data.movies
    .filter(({isFavorite}) => isFavorite);

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


