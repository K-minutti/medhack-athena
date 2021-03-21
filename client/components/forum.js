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
  "Hypertension puts significant strain on the blood vessels, heart, and other vital organs such as the kidneys. As a result, people with high blood pressure are at higher risk of the following serious medical conditions: Heart Disease, Heart Attacks, Kindey Disease, Strokes";

const paragraphThree =
  "Hypertension puts significant strain on the blood vessels, heart, and other vital organs such as the kidneys. As a result, people with high blood pressure are at higher risk of the following serious medical conditions: Heart Disease, Heart Attacks, Kindey Disease, Strokes";

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
                <span className="cinema">Union Square 14</span>
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
                <Label>IMAX</Label>
                <Label icon="globe" content="Additional Languages" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>
        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Inflammation</h3>
          </a>
          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">IFC Cinema</span>
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
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>

        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Inflammation</h3>
          </a>
          <Item>
            <Item.Content>
              <Item.Meta>
                <span className="cinema">IFC Cinema</span>
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
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>

        <Segment raised>
          <a href="/forums/inflammation">
            <h3>/Inflammation</h3>
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
