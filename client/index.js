import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./app";
// import store from './store'
import history from "./history";
import "./socket";

ReactDOM.render(
  // <Provider store={store}>
  <Provider>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
