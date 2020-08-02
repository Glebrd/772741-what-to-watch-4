import * as React from "react";
import * as renderer from "react-test-renderer";
import {CatalogButton} from "./catalog-button";
import {noOperation} from "../../utils";

it(`CatalogButton renders correctly`, () => {
  const tree = renderer
    .create(
        <CatalogButton
          onCatalogButtonClick={noOperation}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
