import React from "react";
import {
  Button,
  Container,
  Divider,
  Icon,
  Image,
  Input,
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

const ForumThreads = () => (
  <Container>
    <div style={{ flexDirection: "inline-block" }}>
      <h1>Inflammation</h1>
      <Button
        style={{ backgroundColor: "#239e79", color: "white" }}
        floated="right"
      >
        Join
        <Icon name="add" size="small" />
      </Button>
      <Button
        style={{ backgroundColor: "red", color: "white" }}
        floated="right"
      >
        Report
      </Button>
    </div>
    <Segment>
      <Form>
        <Form.TextArea label="Post" placeholder="Create a post in this forum" />
      </Form>
    </Segment>
    <Divider />
    <div style={{ padding: "20px" }}>
      <Divider hidden />
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Meta>
              <span className="cinema">Union Square 14</span>
            </Item.Meta>
            <Item.Description>{paragraphOne}</Item.Description>

            <Item.Extra>
              <Label>IMAX</Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraphTwo}</Item.Description>

            <Item.Extra>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraphThree}</Item.Description>

            <Item.Extra>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraphFour}</Item.Description>

            <Item.Extra>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  </Container>
);

export default ForumThreads;
