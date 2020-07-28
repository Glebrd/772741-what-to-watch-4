import * as React from "react";
import {configure, shallow} from 'enzyme';
import {withReviewValidation} from "./with-review-validation";
import * as Adapter from "enzyme-adapter-react-16";

const MockComponent = () => <div/>;
const WrappedMockComponent = withReviewValidation(MockComponent);
configure({adapter: new Adapter()});

describe(`State correctly changed by handleReviewChange`, () => {
  const wrapper = shallow(<WrappedMockComponent />);
  test(`Valid review should change reviewIsValid to true`, () => {
    const event = {
      target: {
        value: `The Darjeeling Limited is certainly a visually appealing movie. The rich colors of southeast Asia mesh wonderfully with Anderson's penchant for precise set-pieces, and it make the entire experience a pleasure to watch.`
      }
    };
    wrapper.instance()._handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(true);
  });

  test(`Invalid review should change reviewIsValid to false`, () => {
    const event = {
      target: {
        value: `Very bad film`
      }
    };
    wrapper.instance()._handleReviewChange(event);
    expect(wrapper.state().reviewIsValid).toEqual(true);
  });
});

describe(`State correctly changed by handleRatingChange`, () => {
  const wrapper = shallow(<WrappedMockComponent />);
  test(`Valid rating should change reviewIsValid to true`, () => {
    const event = {
      target: {
        value: `1`
      }
    };
    wrapper.instance()._handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(true);
  });

  test(`Invalid rating should change reviewIsValid to false`, () => {
    const event = {
      target: {
        value: ``
      }
    };
    wrapper.instance()._handleRatingChange(event);
    expect(wrapper.state().ratingIsValid).toEqual(false);
  });
});

