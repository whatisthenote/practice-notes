import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { fetchStart } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchStart);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
