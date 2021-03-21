import React from "react";
import {
  Button,
  Container,
  Divider,
  Icon,
  Image,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";

const paragraphOne =
  "Hypertension puts significant strain on the blood vessels, heart, and other vital organs such as the kidneys. As a result, people with high blood pressure are at higher risk of the following serious medical conditions: Heart Disease, Heart Attacks, Kindey Disease, Strokes";

const paragraphTwo =
  "Asthma occurs when the body’s airways are sensitive to allergens and become inflamed. This inflammation can cause a painful and frightening asthma attack, which causes the airway muscles to tighten and narrow, making it hard to breathe. Most people can manage their asthma very effectively with proper medication. However, asthma left unchecked can be fatal. On average, 3 people die every day from an asthma attack in the UK.";

const paragraphThree =
  "Most cases of bronchitis develop as a result of an infection which irritates the bronchi (airways), causing an overproduction of mucus. The body tries to shift this excess mucus via coughing. Chronic bronchitis is when this coughing continues daily for several months of the year for two years or more.";

const paragraphFour =
  "Hypertension puts significant strain on the blood vessels, heart, and other vital organs such as the kidneys. As a result, people with high blood pressure are at higher risk of the following serious medical conditions: Heart Disease, Heart Attacks, Kindey Disease, Strokes";

const Forums = () => (
  <Container>
    <h1>Forums</h1>
    <Divider />
    <h3>Recommended For You</h3>
    <div style={{ padding: "40px" }}>
      <Item.Group divided>
        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Inflammation</h3>
          </a>

          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">ICD</span>
              </Item.Meta>
              <Item.Description>{paragraphOne}</Item.Description>
              <Divider />
              <Item.Extra>
                <Button
                  style={{ backgroundColor: "#239e79", color: "white" }}
                  floated="right"
                >
                  Join
                  <Icon name="add" size="small" />
                </Button>
                <Label>Members 890</Label>
                <Label icon="heart" content="Approval" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>
        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Asthma</h3>
          </a>
          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">AAFCA</span>
              </Item.Meta>
              <Item.Description>{paragraphTwo}</Item.Description>
              <Divider />
              <Item.Extra>
                <Button
                  style={{ backgroundColor: "#239e79", color: "white" }}
                  floated="right"
                >
                  Join
                  <Icon name="add" size="small" />
                </Button>
                <Label>Members 1,000</Label>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>

        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Chronic Bronchitis</h3>
          </a>
          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">DW</span>
              </Item.Meta>
              <Item.Description>{paragraphThree}</Item.Description>
              <Divider />
              <Item.Extra>
                <Button
                  style={{ backgroundColor: "#239e79", color: "white" }}
                  floated="right"
                >
                  Join
                  <Icon name="add" size="small" />
                </Button>

                <Label>Closed</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>

        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Fatigue</h3>
          </a>
          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">IFC Cinema</span>
              </Item.Meta>
              <Item.Description>{paragraphFour}</Item.Description>
              <Divider />
              <Item.Extra>
                <Button
                  style={{ backgroundColor: "#239e79", color: "white" }}
                  floated="right"
                >
                  Join
                  <Icon name="add" size="small" />
                </Button>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>
      </Item.Group>
    </div>
  </Container>
);

export default Forums;
