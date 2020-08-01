import * as React from "react";
import * as renderer from "react-test-renderer";
import {UserBlock} from "./user-block";
import {Router} from "react-router-dom";
import history from "../../history";

const user = {
  id: 1,
  email: `gleb@gmail.com`,
  name: `gleb`,
  avatarURL: `/wtw/static/avatar/9.jpg`,
  authorizationStatus: `AUTH`,
};

it(`UserBlock component renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <UserBlock
            user={user}
            authorizationStatus={`AUTH`}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
