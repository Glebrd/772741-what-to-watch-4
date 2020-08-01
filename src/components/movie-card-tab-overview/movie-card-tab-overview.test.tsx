import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieCardTabOverview from "./movie-card-tab-overview";

const movie = {
  id: 634,
  title: `The Truman Show`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  date: `1998`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 7.2,
  scores: 941,
  director: `Louise Virgoe`,
  starring: [`Pamela Anthiftle`, `Arlene Cordelle`, `Arleen Portriss`, `Christy Hullin`],
  description: `An insurance salesman discovers his whole life is actually a reality TV show.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `1h 43m`,
};

const {rating, description, starring, director, scores} = movie;

it(`Movie card tab overview component renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardTabOverview
          rating={rating}
          description={description}
          starring={starring}
          director={director}
          scores={scores}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
