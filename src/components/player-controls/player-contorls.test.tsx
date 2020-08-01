import * as React from "react";
import * as renderer from "react-test-renderer";
import {PlayerControls} from "./player-controls";

const progressValue = 30;
const remainingTime = `120`;

it(`Player controls renders correctly`, () => {
  const tree = renderer
    .create(
        <PlayerControls
          progressValue={progressValue}
          remainingTime={remainingTime}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
