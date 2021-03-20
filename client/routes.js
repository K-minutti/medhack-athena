import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Base} />
      </Switch>
    );
  }
}
