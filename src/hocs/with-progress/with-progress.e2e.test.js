import React from 'react';
import withProgress from "./with-progress";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FRACTION_TO_PERCENT_COEFFICIENT} from "../../const";

const CURRENT_TIME = 30;
const DURATION = 120;

const MockComponent = () => <div/>;
const WrappedMockComponent = withProgress(MockComponent);

configure({adapter: new Adapter()});

describe(`withProgress tests`, () => {
  jest.spyOn(WrappedMockComponent.prototype, `componentDidMount`).mockImplementationOnce(() => {});
  const wrapper = shallow(<WrappedMockComponent/>);

  test(`remainingTime correctly changed my handleTimeUpdate`, () => {
    wrapper.instance()._handleTimeUpdate(CURRENT_TIME, DURATION);
    expect(wrapper.state().remainingTime)
      .toEqual(DURATION - CURRENT_TIME);
  });

  test(`progressValue correctly changed by handleTimeUpdate`, () => {
    wrapper.instance()._handleTimeUpdate(CURRENT_TIME, DURATION);
    expect(wrapper.state().progressValue)
      .toEqual(CURRENT_TIME / DURATION * FRACTION_TO_PERCENT_COEFFICIENT);
  });
});
