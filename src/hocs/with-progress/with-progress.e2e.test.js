import React from 'react';
import withProgress from "./with-progress";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FRACTION_TO_PERCENT_COEFFICIENT} from "../../const";

const currentTime = 30;
const duration = 120;

const MockComponent = () => <div/>;
const WrappedMockComponent = withProgress(MockComponent);

configure({adapter: new Adapter()});

describe(`withProgress tests`, () => {
  jest.spyOn(WrappedMockComponent.prototype, `componentDidMount`).mockImplementationOnce(() => {});
  const wrapper = shallow(<WrappedMockComponent/>);

  test(`remainingTime correctly changed my handleTimeUpdate`, () => {
    wrapper.instance()._handleTimeUpdate(currentTime, duration);
    expect(wrapper.state().remainingTime)
      .toEqual(duration - currentTime);
  });

  test(`progressValue correctly changed by handleTimeUpdate`, () => {
    wrapper.instance()._handleTimeUpdate(currentTime, duration);
    expect(wrapper.state().progressValue)
      .toEqual(currentTime / duration * FRACTION_TO_PERCENT_COEFFICIENT);
  });
});
