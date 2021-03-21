import React from "react";
import { Button, Divider, Image, Container } from "semantic-ui-react";
import one from "../assets/w.svg";

const Research = () => {
  return (
    <div className="landing">
      <Container>
        <Divider hidden />
        <h1>Athena + SumMed</h1>

        {/* <Image src={one} size="medium" /> */}

        <Divider hidden />
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

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <h4>AI has a place in the a product like Athena in the areas of:</h4>
        <h5>User Verification</h5>
        <h5>Community Policing</h5>
        <h5>Generating Recommendations</h5>
        <h5>Areas Covered by SumMed: Labeling, Analysis, Summarizing</h5>
        <h2>
          <a>COMMUNITY + AI/ML = NEW INSIGHTS</a>
        </h2>
      </Container>
      <Divider hidden />
    </div>
  );
};

export default Research;
