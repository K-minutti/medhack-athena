import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Icon } from "semantic-ui-react";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    // this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="nav">
        <Menu stackable className="menu">
          <Menu.Item>
            <h1 style={{ color: "#239e79" }}>Athena</h1>
          </Menu.Item>
          <Menu.Item className="menu-search">
            <Input size="big" icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="browse"
            active={activeItem === "browse"}
            onClick={this.handleItemClick}
          >
            Browse
          </Menu.Item>

          <Menu.Item
            name="ask"
            active={activeItem === "submit"}
            onClick={this.handleItemClick}
          >
            Ask
          </Menu.Item>

          <Menu.Item
            name="research"
            active={activeItem === "research"}
            onClick={this.handleItemClick}
          >
            Research
          </Menu.Item>

          <Menu.Item
            name="upload"
            active={activeItem === "upload"}
            onClick={this.handleItemClick}
            // style={{
            //   fontWeight: "bold",
            //   backgroundColor: "#239e79",
            //   margin: "4px",
            //   textAlign: "center",
            //   borderRadius: "6px",
            // }}
          >
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
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
              href="/login"
            >
              Log In
            </Menu.Item>

            <Menu.Item
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
              href="/signup"
            >
              Sign Up
            </Menu.Item>

            <Menu.Item
              name="help"
              active={activeItem === "help"}
              onClick={this.handleItemClick}
            >
              Help
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
