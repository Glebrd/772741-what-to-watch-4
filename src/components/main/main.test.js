import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const promoMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const movies = [];
const onCardTitleClick = () => {};

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          movies = {movies}
          promoMovie = {promoMovie}
          onCardTitleClick={onCardTitleClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
