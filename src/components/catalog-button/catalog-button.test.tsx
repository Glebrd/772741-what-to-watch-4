import * as React from "react";
import * as renderer from "react-test-renderer";
import {CatalogButton} from "./catalog-button";
import {noOperation} from "../../utils";

it(`Catalog genres list renders`, () => {
  const tree = renderer
    .create(
        <CatalogButton
          onCatalogButtonClick={noOperation}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
