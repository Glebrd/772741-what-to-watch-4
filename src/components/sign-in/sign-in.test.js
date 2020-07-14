import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";

const onSubmit = () => {};

it(`SignIn component renders`, () => {
  const tree = renderer
    .create(
        <SignIn onSubmit={onSubmit}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
