import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./catalog-card";

const movie = {
  title: `Hotel Transylvania`,
  picture: `img/fantastic-beasts-t she-crimes-of-grindelwald.jpg`,
};
const onCardTitleClick = () => {};
const onMovieCardHover = () => {};

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <CatalogCard
          movie={movie}
          onCardTitleClick={onCardTitleClick}
          onMovieCardHover={onMovieCardHover}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
