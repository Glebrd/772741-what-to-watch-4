import React from "react";
import renderer from "react-test-renderer";
import {CatalogButton} from "./catalog-button";

it(`Catalog genres list renders`, () => {
  const tree = renderer
    .create(
        <CatalogButton/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
