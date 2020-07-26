import * as React from "react";
import * as renderer from "react-test-renderer";
import {CatalogGenresList} from "./catalog-genres-list";

const currentGenre = `All genres`;
const genres = new Set([`Drams`, `Sci-Fi`, `Romance`]);
const onChange = () => {};

it(`Catalog genres list renders`, () => {
  const tree = renderer
    .create(
        <CatalogGenresList
          currentGenre={currentGenre}
          genres={genres}
          onChange={onChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
