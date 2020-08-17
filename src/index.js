import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import Wrapper from "./components/Wrapper/Wrapper";
import configureStore, { history } from "./store/appStore";

// import generic css
import "./css/css.styl";

const { store, persistor } = configureStore();

const element = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Wrapper persistor={persistor} />
  </Provider>,
  element
);
