import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./catalog-card";

const movie = {
  title: `Hotel Transylvania`,
  picture: `img/fantastic-beasts-t she-crimes-of-grindelwald.jpg`,
};
const onCardClick = () => {};
const onMovieCardHover = () => {};

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <CatalogCard
          movie={movie}
          onCardClick={onCardClick}
          onMovieCardHover={onMovieCardHover}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
