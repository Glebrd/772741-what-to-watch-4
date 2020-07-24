import {ISOStringProperty, MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR} from "./const";

const DELETE_COUNT = 1;

const TimeAbbreviation = {
  HOURS: `h`,
  MINUTES: `m`,
};

export const extend = (firstSource, secondSource) => {
  return Object.assign({}, firstSource, secondSource);
};

export const formatTime = (seconds) => {
  return new Date(seconds * MILLISECONDS_IN_SECOND).toISOString()
    .substr(ISOStringProperty.START_OF_HOURS, ISOStringProperty.LENGTH_OF_HH_MM_SS_SUBSTRING);
};

export const formatDuration = (totalMinutes) =>{
  let hours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
  let minutes = totalMinutes % MINUTES_IN_HOUR;
  return `${hours + TimeAbbreviation.HOURS} ${minutes + TimeAbbreviation.MINUTES}`;
};

export const replaceMovie = (movie, movies) => {
  const index = movies.findIndex((oldMovie) => oldMovie.id === movie.id);
  movies.splice(index, DELETE_COUNT, movie);
  return movies;
};

export const replacePromo = (updatedMovie, promoMovie) => {
  return updatedMovie.id === promoMovie.id ? updatedMovie : promoMovie;
};


