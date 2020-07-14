import React from "react";
import renderer from "react-test-renderer";
import {PlayerControls} from "./player-controls";

const PROGRESS_VALUE = 30;
const REMAINING_TIME = `120`;

it(`Player controls renders`, () => {
  const tree = renderer
    .create(
        <PlayerControls
          progressValue={PROGRESS_VALUE}
          remainingTime={REMAINING_TIME}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
