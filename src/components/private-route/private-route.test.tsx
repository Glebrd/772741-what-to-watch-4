import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";
import {PrivateRoute} from "./private-route";
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
              authorizationStatus={`AUTH`}
              requiredAuthorizationStatus={`AUTH`}
              computedMatch={{
                isExact: true,
                path: `/mylist`,
                url: `/mylist`,
                params: {
                  id: 1}
              }}
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
