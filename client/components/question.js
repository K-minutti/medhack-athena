import React from "react";
import {
  Button,
  Divider,
  Segment,
  Form,
  Icon,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";

const topicOptions = [
  { key: "a", text: "Arthritis", value: "a" },
  { key: "b", text: "Joint Pain", value: "b" },
  { key: "c", text: "Back Pain", value: "c" },
  { key: "d", text: "Breast Cancer", value: "d" },
  { key: "e", text: "Pediatric", value: "e" },
  { key: "f", text: "Orthopedics", value: "f" },
  { key: "g", text: "Dental", value: "g" },
  { key: "h", text: "Vision", value: "h" },
  { key: "i", text: "Artery Health", value: "i" },
  { key: "j", text: "Diabetes", value: "j" },
  { key: "k", text: "HIV", value: "k" },
  { key: "l", text: "Chronic Illness", value: "l" },
  { key: "n", text: "Muscular", value: "n" },
  { key: "o", text: "Nervous System", value: "o" },
  { key: "p", text: "Allergies", value: "p" },
  { key: "q", text: "Medications", value: "q" },
  { key: "r", text: "Holistic Treaments", value: "r" },
  { key: "s", text: "Stomach Ulcers", value: "s" },
  { key: "t", text: "COVID-19", value: "t" },
  { key: "u", text: "Inflammation", value: "u" },
  { key: "v", text: "Hypertension", value: "v" },
];

const Question = () => {
  return (
    <div className="question">
      <Segment raised>
        <h2 style={{ color: "#303030" }}>Ask Your Question</h2>
        <Divider hidden />
        <Form>
          <Form.Input label="Question Title" type="text" />
          <Form.Select
            label="Category"
            placeholder="Category or similar tag"
            fluid
            multiple
            selection
            options={topicOptions}
          />

          <Form.TextArea
            label="Body"
            placeholder="Tell us more about you question please provide details..."
          />
          <Form.Input label="Attach Image" type="text" />

          <div className="onboardSumbit">
            <Segment style={{ backgroundColor: "#D8D8D8" }}>
              <p icon>
                <Icon name="image" />
                Upload an image
              </p>
              <Button basic color="black">
                Add Document
              </Button>
            </Segment>

            <Form.Field control={Checkbox} label="Make anonymous" />
            <Divider hidden />

            <Button
              size="big"
              href="/browse/questions"
              style={{ backgroundColor: "#239e79", color: "white" }}
            >
              Post Question
            </Button>
          </div>
        </Form>

        <Divider hidden />
      </Segment>
    </div>
  );
};

export default Question;
