import React from "react";
import { Button, Divider, Image, Container } from "semantic-ui-react";
import one from "../assets/w.svg";

const Research = () => {
  return (
    <div className="landing">
      <Container>
        <div style={{ height: "200px" }}></div>
        <Divider hidden />
        <h1 style={{ color: "#239e79", fontSize: "100px" }}>Athena + SumMed</h1>

        {/* <Image src={one} size="medium" /> */}

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <div style={{ height: "400px" }}></div>
        <Divider hidden />
        <Divider hidden />
        <h1>Communtiy</h1>
        <h2>A Place Where Others Provide Support</h2>
        <h2>
          {" "}
          The American Cancer Society's estimates for breast cancer in the
          United States for 2021 are:  * About 281,550 new cases of invasive
          breast cancer will be diagnosed in women 
        </h2>
        <Divider hidden />
        <Divider hidden />
        <div style={{ height: "240px" }}></div>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <h1>AI has a place in the a product like Athena in the areas of:</h1>
        <h2>User Verification</h2>
        <h2>Community Policing</h2>
        <h2>Generating Recommendations</h2>
        <h2>Areas Covered by SumMed: Labeling, Analysis, Summarizing</h2>
        <h1>
          <a>COMMUNITY + AI/ML = NEW INSIGHTS</a>
        </h1>
      </Container>
      <Divider hidden />
    </div>
  );
};

export default Research;
