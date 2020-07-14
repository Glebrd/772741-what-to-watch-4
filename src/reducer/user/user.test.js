import {reducer, AuthorizationStatus, ActionType} from "./user";
import {adaptUser} from "../../adapters/user";
import {extend} from "../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
};

const user = {
  "id": 1,
  "email": `email@gmail.com`,
  "name": `name`,
  "avatar_url": `img/1.png`,
};

describe(`User reducer works correctly`, () => {
  test(`Should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test(`Reducer should change user by a given value`, () => {
    const action = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(reducer(initialState, action)).toEqual(
        extend(initialState, {
          user: adaptUser(user),
        }));
  });

  test(`Reducer should change authorizationStatus by a given value`, () => {
    const actionAuth = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    const actionNoAuth = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(reducer(initialState, actionAuth)).toEqual(
        extend(initialState, {
          authorizationStatus: AuthorizationStatus.AUTH,
        }));

    expect(reducer(initialState, actionNoAuth)).toEqual(
        extend(initialState, {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
        }));

    expect(reducer(
        extend(initialState,
            {authorizationStatus: AuthorizationStatus.AUTH}),
        actionAuth))
  .toEqual(extend(initialState,
      {authorizationStatus: AuthorizationStatus.AUTH}));


    expect(reducer(
        extend(initialState,
            {authorizationStatus: AuthorizationStatus.AUTH}),
        actionNoAuth))
      .toEqual(extend(initialState,
          {authorizationStatus: AuthorizationStatus.NO_AUTH}));

  });
});
