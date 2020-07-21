import {ISOStringProperties, MILLISECONDS_IN_SECOND} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (seconds) => {
  console.log(seconds);
  return new Date(seconds * MILLISECONDS_IN_SECOND).toISOString()
    .substr(ISOStringProperties.START_OF_HOURS, ISOStringProperties.LENGTH_OF_HH_MM_SS_SUBSTRING);
};

export const replaceMovie = (movie, movies) => {
  const index = movies.findIndex((oldMovie) => oldMovie.id === movie.id);
  movies.splice(index, 1, movie);
  return movies;
};

export const replacePromo = (updatedMovie, promoMovie) => {
  return updatedMovie.id === promoMovie.id ? updatedMovie : promoMovie;
};

export const checkIfObjectEmpty = (object) => Object.keys(object).length;


