import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";

const onSignInClick = () => {};
const user = {
  avatarURL: `/wtw/static/avatar/2.jpg`,
};

it(`UserBlock component renders`, () => {
  const tree = renderer
    .create(
        <UserBlock
          user={user}
          onSignInClick={onSignInClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
