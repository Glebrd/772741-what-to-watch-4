import React from "react";
import renderer from "react-test-renderer";
import Catalog from "../catalog/catalog";

const movies = [];
const onCardClick = () => {};

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          movies={movies}
          onCardClick={onCardClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
