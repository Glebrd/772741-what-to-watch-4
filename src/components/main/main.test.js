import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const movies = [];
const onCardClick = () => {};

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          movies = {movies}
          promoMovie = {promoMovie}
          onCardClick={onCardClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
