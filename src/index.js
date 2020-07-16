import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer";
import {createAPI} from "./api";
import {compose} from "redux";
import {applyMiddleware} from "redux";
import {Operation} from "./reducer/data/data";
import {Operation as UserOperation} from "./reducer/user/user";
import thunk from "redux-thunk";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadMovies());
store.dispatch(Operation.loadPromoMovie());
store.dispatch(UserOperation.checkAuth());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
};
// Временно, чтоб работал маршрут /dev-review
setTimeout(init, 1000)
