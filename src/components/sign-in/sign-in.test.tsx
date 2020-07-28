import * as React from "react";
import * as renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {Router} from "react-router-dom";
import history from "../../history";
import {noOperation} from "../../utils";

it(`SignIn component renders`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn
            onSubmit={noOperation}
            isValid={true}
            onChange={noOperation}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
