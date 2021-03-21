import React from "react";
import {
  Button,
  Container,
  Divider,
  Icon,
  Image,
  Input,
  Form,
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
      <h1>/Inflammation</h1>
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
      <h3>Post</h3>
      <Form>
        <Form.TextArea label="" placeholder="Create a post in this forum" />
      </Form>
    </Segment>
    <Divider />
    <div style={{ padding: "20px" }}>
      <Divider hidden />
      <h3>Posts</h3>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Meta>
              <a href="/forums/inflammation/post:1">
                <h3>Inflammation after eating meat</h3>
              </a>
            </Item.Meta>
            <Item.Description>{paragraphOne}</Item.Description>

            <Item.Extra>
              <Label>Active</Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Meta>
              <a href="/forums/inflammation/post:1">
                <h3>Anti-Inflammatory Perscription</h3>
              </a>
            </Item.Meta>
            <Item.Description>{paragraphTwo}</Item.Description>

            <Item.Extra>
              <Label>Favorite</Label>
              <Label icon="globe" content="Additional Languages" />
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Content>
            <Item.Meta>
              <a href="/forums/inflammation/post:1">
                <h3>Inflammation over 50</h3>
              </a>
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
              <a href="/forums/inflammation/post:1">
                <h3>Teens at Risk of ...</h3>
              </a>
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
