import React from "react";
import renderer from "react-test-renderer";
import Catalog from "../catalog/catalog";

const movies = [];
const onCardTitleClick = () => {};

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <Catalog
          movies={movies}
          onCardTitleClick={onCardTitleClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
