import React from "react";
import renderer from "react-test-renderer";
import {PlayerControls} from "./player-controls";

const progressValue = 30;
const remainingTime = 120;

it(`Player controls renders`, () => {
  const tree = renderer
    .create(
        <PlayerControls
          progressValue={progressValue}
          remainingTime={remainingTime}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
