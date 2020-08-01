import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {SignIn} from "./sign-in";
import {noOperation} from "../../utils";

configure({adapter: new Adapter()});

describe(`Should call an onAuthorizeUser function when call handleSubmit`, () => {
  const event = {
    preventDefault: () => {}
  };

  const onSubmit = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));


  it(`with valid fields`, () => {

    // beforeEach(() => {
    //   wrapper.instance().loginRef.current = {value: `login`};
    // });

    const loginRef = {};
    const passwordRef = {};

    const isValid = true;

    const wrapper = shallow(
      <SignIn
        // ref={this.getRef}
        onSubmit={onSubmit}
        isValid={isValid}
        onChange={noOperation}
      />
    );

    wrapper.instance().loginRef = { current: {value: `login`}};
    wrapper.instance().passwordRef = { current: {value: `password`}};
    // wrapper.instance().loginRef.current = {};
    wrapper.instance()._handleSubmit(event);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  // it(`with non valid fields`, () => {
  //   wrapper.setState({isValid: false});
  //   wrapper.instance()._handleSubmit(event);
  //   expect(onAuthorizeUser).toHaveBeenCalledTimes(0);
  // });
});


