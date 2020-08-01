import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {SignIn} from "./sign-in";
import {noOperation} from "../../utils";
import {MockCallProperty} from "../../const";

configure({adapter: new Adapter()});

describe(`handleSubmit calls onSubmit with right data`, () => {
  const event = {
    preventDefault: () => {}
  };

  const onSubmit = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));
  const authDataMock = {
    login: `login`,
    password: `password`,
  }

  it(`handleSubmit calls onSubmit with right data on Valid`, () => {

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
    expect(onSubmit.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatchObject(authDataMock);
  });

  // it(`with non valid fields`, () => {
  //   wrapper.setState({isValid: false});
  //   wrapper.instance()._handleSubmit(event);
  //   expect(onAuthorizeUser).toHaveBeenCalledTimes(0);
  // });
});


