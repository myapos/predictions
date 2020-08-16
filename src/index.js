import ReactDOM from "react-dom";
import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import configureStore, { history } from "./store/appStore";

// import generic css
import "./css/css.styl";

const { store, persistor } = configureStore();

const element = document.getElementById("root");

ReactDOM.render(<Wrapper store={store} persistor={persistor} />, element);
