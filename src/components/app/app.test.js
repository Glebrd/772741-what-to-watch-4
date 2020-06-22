import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const promoMovie = {};
const movies = [];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          promoMovie={promoMovie}
          movies={movies}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
