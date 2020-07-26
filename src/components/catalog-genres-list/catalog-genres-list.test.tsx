import * as React from "react";
import * as renderer from "react-test-renderer";
import {CatalogGenresList} from "./catalog-genres-list";
import {noOperation} from "../../utils";

const currentGenre = `All genres`;
const genres = new Set([`Drams`, `Sci-Fi`, `Romance`]);

it(`Catalog genres list renders`, () => {
  const tree = renderer
    .create(
        <CatalogGenresList
          currentGenre={currentGenre}
          genres={genres}
          onChangeTab={noOperation}
          onGenreChange={noOperation}
          activeTab={`All genres`}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
