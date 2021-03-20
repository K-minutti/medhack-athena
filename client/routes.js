import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import PropTypes from "prop-types";
import { Base, Login, Signup } from "./components";

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
