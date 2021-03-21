import React from "react";
import { Grid, Segment, Icon, Divider, Input, Button } from "semantic-ui-react";

const Upload = () => (
  <div className="question">
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#239e79" }}> Upload - Analyze - Summarize </h2>
      <Divider />
      <Divider hidden />
      <Divider hidden />
    </div>
    <Grid columns="equal">
      <Grid.Column>
        <Segment>
          <h3>Upload a scan or photo of a medical report or other text.</h3>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#D8D8D8",
              //   height: "200px",
              padding: "100px 0",
            }}
          >
            <p icon>
              <Icon name="upload" />
              Click or drag a file to this area to upload
            </p>
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Segment>
          <h3>
            Analyze some public health information from the internet. For
            example, a news article, blog, research document
          </h3>
          <Divider hidden />
          <Input
            style={{ width: "100%" }}
            label="Analyze"
            labelPosition="right"
            placeholder="Paste a link to an article"
          />
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Upload;
