import React from "react";
import { Button, Divider, Image } from "semantic-ui-react";
import one from "../assets/landing-one.svg";
import two from "../assets/landing-two.svg";
const Base = () => {
  return (
    <div className="landing">
      <Divider hidden />

      <h1 style={{ color: "#303030" }}>Welcome to Athena</h1>
      <h3 style={{ color: "#303030" }}>
        The community that empowers you with the tools you need to navigate
        medical information.
      </h3>
      <Divider hidden />
      <Button
        size="huge"
        href="/signup"
        style={{ backgroundColor: "#239e79", color: "white" }}
      >
        Sign Up Now
      </Button>
      <Divider hidden />
      <Image.Group size="big">
        <Image src={two} />
        <Image src={one} />
      </Image.Group>
    </div>
  );
};

export default Base;
