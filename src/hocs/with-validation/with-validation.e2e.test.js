import React from "react";
import {configure, shallow} from 'enzyme';
import withValidation from "./with-validation";
import Adapter from "enzyme-adapter-react-16";

const MockComponent = () => <div/>;
const WrappedMockComponent = withValidation(MockComponent);
configure({adapter: new Adapter()});

describe(`Should change state when call handleChange`, () => {
  const wrapper = shallow(<WrappedMockComponent />);
  test(`Valid email should change state to true`, () => {
    const event = {
      target: {
        value: `email@gmail.com`
      }
    };
    wrapper.instance()._handleChange(event);
    expect(wrapper.state().isValid).toEqual(true);
  });

  test(`Invalid email should change state to false`, () => {
    const event = {
      target: {
        value: `email`
      }
    };
    wrapper.instance()._handleChange(event);
    expect(wrapper.state().isValid).toEqual(false);
  });
});
