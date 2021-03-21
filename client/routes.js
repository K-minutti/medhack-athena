import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { me } from "./store";
import PropTypes from "prop-types";
import {
  Base,
  Login,
  Onboard,
  Signup,
  Home,
  Browse,
  Forums,
} from "./components";

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={Base} />
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/forums" component={Forums} />
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/onboard" component={Onboard} />
            <Route exact path="/home" component={Home} />
          </Switch>
        ) : (
          ""
        )}
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

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
