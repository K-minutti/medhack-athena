import React from "react";
import {
  Input,
  Menu,
  Segment,
  Dimmer,
  Loader,
  Container,
  Image,
} from "semantic-ui-react";

import image from "../assets/paragraph.png";
class Browse extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <h1>Browse</h1>
        <div>
          <Menu pointing>
            <Menu.Item
              name="forums"
              active={activeItem === "forums"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="questions"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="people"
              active={activeItem === "people"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="communities"
              active={activeItem === "communities"}
              onClick={this.handleItemClick}
            />
          </Menu>

          <Segment>
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>

            <Image src={image} />
          </Segment>
        </div>
      </Container>
    );
  }
}

export default Browse;
