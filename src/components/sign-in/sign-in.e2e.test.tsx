import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {SignIn} from "./sign-in";
import {noOperation} from "../../utils";
import {MockCallProperty} from "../../const";
import history from "../../history";
import {extend} from "../../utils";
import {AppRoute} from "../../const";

configure({adapter: new Adapter()});

describe(`handleSubmit calls onSubmit with right data`, () => {
  const event = {
    preventDefault: noOperation
  };
  const authDataMock = {
    login: `login`,
    password: `password`,
  };

  it(`handleSubmit calls onSubmit with right data on isValid = true`, () => {

    const isValid = true;
    const onSubmit = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));

    const wrapper = shallow(
        <SignIn
          history = {history}
          onSubmit={onSubmit}
          isValid={isValid}
          onChange={noOperation}
        />
    );

    wrapper.instance().loginRef = {current: {value: `login`}};
    wrapper.instance().passwordRef = {current: {value: `password`}};
    wrapper.instance()._handleSubmit(event);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatchObject(authDataMock);
  });

  it(`handleSubmit does NOT call onSubmit on isValid = false`, () => {

    const isValid = false;
    const onSubmit = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));

    const wrapper = shallow(
        <SignIn
          history = {history}
          onSubmit={onSubmit}
          isValid={isValid}
          onChange={noOperation}
        />
    );

    wrapper.instance()._handleSubmit(event);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});



