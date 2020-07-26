import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";
import {PrivateRoute} from "./private-route";
import {AuthorizationStatus} from "../../reducer/user/user";
import MyList from "../my-list/my-list";

const mockStore = configureStore([]);

const store = mockStore({
});

jest.mock(`../my-list/my-list`, () => `MyList`);

it(`Private route render correctly`, () => {
  const tree = renderer

    .create(
        <Router history={history}>
          <Provider store={store}>
            <PrivateRoute
              exact
              path='/mylist'
              requiredAuthorizationStatus={AuthorizationStatus.AUTH}
              pathToRedirect={`/login`}
              render={() => {
                return <MyList/>;
              }}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
