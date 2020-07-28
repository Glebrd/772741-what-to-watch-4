import * as React from "react";
import CatalogCard from "../small-movie-card/small-movie-card";
import {MovieType} from "../../types";

interface Props {
  movies: MovieType[];
}

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {

  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies &&
      movies.map((movie) =>
        <CatalogCard
          key={movie.id}
          smallMovieCard={movie}
        />
      )}
    </div>
  );
};

export default MoviesList;
