import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieCardTabDetails from "./movie-card-tab-details";

const movie = {
  id: 634,
  title: `Game`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Thrller`,
  date: 1997,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8.3,
  scores: 1052,
  director: `Gardiner Stanton`,
  starring: [`Bunnie Litchmore`, `Philippine Tick`, `Paige Keasey`, `Kikelia Agar`],
  description: `After a wealthy banker is given an opportunity to participate in a mysterious game, his life is turned upside down when he becomes unable to distinguish between the game and reality.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 95,
};

const {runTime, starring, director, date, genre} = movie;

it(`Movie card tab details component renders`, () => {
  const tree = renderer
    .create(
        <MovieCardTabDetails
          starring={starring}
          runTime={runTime}
          director={director}
          date={date}
          genre={genre}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});
