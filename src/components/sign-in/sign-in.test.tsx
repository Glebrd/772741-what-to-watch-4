import * as React from "react";
import * as renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {Router} from "react-router-dom";
import history from "../../history";
import {noOperation} from "../../utils";

const isValid = true;

it(`SignIn component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn
            history={history}
            onSubmit={noOperation}
            isValid={isValid}
            onChange={noOperation}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
