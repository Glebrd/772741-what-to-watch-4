import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};
const moviesNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          promoMovieName={promoMovie.name}
          promoMovieGenre={promoMovie.genre}
          promoMovieDate={promoMovie.date}
          moviesNames={moviesNames}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
