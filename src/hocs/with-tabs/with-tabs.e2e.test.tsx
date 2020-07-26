import * as React from "react";
import {configure, shallow} from 'enzyme';
import withTabs from "./with-tabs";
import Adapter from "enzyme-adapter-react-16";

const MockComponent = () => <div/>;
const WrappedMockComponent = withTabs(MockComponent);
configure({adapter: new Adapter()});

describe(`State correctly changed`, () => {
  const wrapper = shallow(<WrappedMockComponent />);
  test(`State is empty at start`, () => {
    expect(wrapper.state().currentTab).toEqual(``);
  });
  test(`State correctly changed by handleTabSwitch`, () => {

    wrapper.instance()._handleTabSwitch(`Adventure`);
    expect(wrapper.state().currentTab).toEqual(`Adventure`);
  });
});
