import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
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


const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

store.dispatch(Operation.loadPromoMovie());
store.dispatch(Operation.loadMovies()).then(init);
store.dispatch(UserOperation.checkAuth());

