import React from "react";
import { connect } from "react-redux";
import { logout } from "../store";
import PropTypes from "prop-types";
import { Menu, Input, Icon } from "semantic-ui-react";

const Navbar = ({ handleClick, isLoggedIn }) => {
  const home = isLoggedIn ? "/home" : "/";
  return (
    <div className="nav">
      <Menu stackable className="menu">
        <Menu.Item href={home}>
          <h1 style={{ color: "#239e79" }}>Athena</h1>
        </Menu.Item>
        <Menu.Item className="menu-search">
          <Input size="big" icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item name="browse" href="/browse">
          Browse
        </Menu.Item>

        <Menu.Item name="ask" href="/ask">
          Ask
        </Menu.Item>

        <Menu.Item name="research" href="/research">
          Research
        </Menu.Item>

        <Menu.Item name="upload" href="/upload">
          <span
            style={{
              color: "#239e79",
              fontWeight: "bold",
              textShadow: "1px 1px 3px 	#DCDCDC",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Icon name="add" />
            Upload / Analyze
          </span>
        </Menu.Item>

        <Menu.Menu position="right">
          {isLoggedIn ? (
            <>
              <Menu.Item name="profile" onClick={handleClick} href="/profile">
                <Icon name="user circle outline" size="large" />
              </Menu.Item>
              <Menu.Item name="logout" onClick={handleClick} href="/">
                Log Out
              </Menu.Item>{" "}
            </>
          ) : (
            <>
              <Menu.Item name="login" href="/login">
                Log In
              </Menu.Item>
              <Menu.Item name="signup" href="/signup">
                Sign Up
              </Menu.Item>
            </>
          )}
          <Menu.Item name="help" href="/help">
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
