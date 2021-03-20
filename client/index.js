import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./app";
import store from "./store";
import history from "./history";
import "semantic-ui-css/semantic.min.css";
// import "../node_modules/semantic-ui-css/semantic.min.css"
import "./socket";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
