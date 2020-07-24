import {ISOStringProperty, MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (seconds) => {
  return new Date(seconds * MILLISECONDS_IN_SECOND).toISOString()
    .substr(ISOStringProperty.START_OF_HOURS, ISOStringProperty.LENGTH_OF_HH_MM_SS_SUBSTRING);
};

export const formatDuration = (totalMinutes) =>{
  let hours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
  let minutes = totalMinutes % MINUTES_IN_HOUR;
  return `${hours}h ${minutes}m`;
};

export const replaceMovie = (movie, movies) => {
  const index = movies.findIndex((oldMovie) => oldMovie.id === movie.id);
  movies.splice(index, 1, movie);
  return movies;
};

export const replacePromo = (updatedMovie, promoMovie) => {
  return updatedMovie.id === promoMovie.id ? updatedMovie : promoMovie;
};


