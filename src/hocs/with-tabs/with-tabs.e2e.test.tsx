import * as React from "react";
import {configure, shallow} from 'enzyme';
import withTabs from "./with-tabs";
import * as Adapter from "enzyme-adapter-react-16";
import {noOperation} from "../../utils";

const MockComponent = () => <div/>;
const WrappedMockComponent = withTabs(MockComponent);
configure({adapter: new Adapter()});

describe(`WithTabs state correctly changed  by handleTabSwitch`, () => {
  const wrapper = shallow(
      <WrappedMockComponent
        onGenreChange={noOperation}
        genres={[`Drama`]}
      />
  );
  test(`WithTabs State is empty at start`, () => {
    expect(wrapper.state().currentTab).toEqual(``);
  });
  test(`WithTabs State correctly changed by handleTabSwitch`, () => {

    wrapper.instance()._handleTabSwitch(`Adventure`);
    expect(wrapper.state().currentTab).toEqual(`Adventure`);
  });
});
