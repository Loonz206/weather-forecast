import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";
import App from "./components/App.js";
import reducers from "./reducers/index";

let store;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(logger, ReduxPromise))
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
