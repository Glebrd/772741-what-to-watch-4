import * as React from "react";
import * as renderer from "react-test-renderer";
import {UserBlock} from "./user-block";
import {Router} from "react-router-dom";
import history from "../../history";
import {noOperation} from "../../utils";

const user = {
  avatarURL: `/wtw/static/avatar/2.jpg`,
};

it(`UserBlock component renders`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <UserBlock
            user={user}
            onSignInClick={noOperation}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
