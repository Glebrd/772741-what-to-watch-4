import * as React from "react";
import CatalogCard from "../small-movie-card/small-movie-card";
import {movieType} from "../../types";

const MoviesList = (props) => {

  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) =>
        <CatalogCard
          key={movie.id}
          smallMovieCard={movie}
        />
      )}
    </div>
  );
};

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(movieType),
//   movie: movieType,
// };

export default MoviesList;
