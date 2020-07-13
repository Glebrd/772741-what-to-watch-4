export const adaptMovie = (movie) => {
  return {
    id: movie.id,
    title: movie.name,
    poster: movie.poster_image,
    picture: movie.preview_image,
    background: movie.background_image,
    backgroundColor: movie.background_color,
    videoLInk: movie.video_link,
    videoPreview: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    scores: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    genre: movie.genre,
    date: movie.released,
    isFavorite: movie.is_favorite,
  };
};

export const adaptMovies = (movies) => movies.map((movie) => adaptMovie(movie));
