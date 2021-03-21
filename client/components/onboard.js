import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Image,
  Dropdown,
  Icon,
} from "semantic-ui-react";
import top from "../assets/instant-info.svg";
import bottom from "../assets/sign-in.svg";

const topicOptions = [
  { key: "a", text: "Arabic", value: "Arabic" },
  { key: "b", text: "Chinese", value: "Chinese" },
  { key: "c", text: "Danish", value: "Danish" },
  { key: "d", text: "Dutch", value: "Dutch" },
  { key: "e", text: "English", value: "English" },
  { key: "f", text: "French", value: "French" },
  { key: "g", text: "German", value: "German" },
  { key: "h", text: "Greek", value: "Greek" },
  { key: "i", text: "Hungarian", value: "Hungarian" },
  { key: "j", text: "Italian", value: "Italian" },
  { key: "k", text: "Japanese", value: "Japanese" },
  { key: "l", text: "Korean", value: "Korean" },
  { key: "n", text: "Lithuanian", value: "Lithuanian" },
  { key: "o", text: "Persian", value: "Persian" },
  { key: "p", text: "Polish", value: "Polish" },
  { key: "q", text: "Portuguese", value: "Portuguese" },
  { key: "r", text: "Russian", value: "Russian" },
  { key: "s", text: "Spanish", value: "Spanish" },
  { key: "t", text: "Swedish", value: "Swedish" },
  { key: "u", text: "Turkish", value: "Turkish" },
  { key: "v", text: "Vietnamese", value: "Vietnamese" },
];

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];

const optionsGender = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
  { key: "na", text: "Prefer Not To Say", value: "na" },
];
const optionsEducation = [
  { key: "na", text: "Prefer Not To Say", value: "na" },
  { key: "m", text: "Middle School", value: "m" },
  { key: "h", text: "High School", value: "h" },
  { key: "sc", text: "Some College", value: "sc" },
  { key: "as", text: "Associates Degree", value: "as" },
  { key: "b", text: "Bachelors Degree", value: "b" },
  { key: "ms", text: "Masters Degree", value: "ms" },
  { key: "phd", text: "PhD or Higher", value: "phd" },
];

const optionsMHP = [
  { key: "n", text: "Nurse", value: "n" },
  { key: "d", text: "Doctor", value: "d" },
  { key: "dn", text: "Dentist", value: "dn" },
  { key: "s", text: "Surgeon", value: "s" },
  { key: "p", text: "Physician", value: "p" },
  { key: "ph", text: "Pharamcist", value: "ph" },
];

const optionsLB = [
  { key: "fsmb", text: "Federation Of State Medical Board", value: "fsmb" },
  {
    key: "ncsbn",
    text: "The National Council of State Boards of Nursing",
    value: "ncsbn",
  },
  {
    key: "uems",
    text: "The European Union of Medical Specialists",
    value: "uems",
  },
  { key: "o", text: "Other", value: "other" },
];

class Onboard extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;

    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Image.Group>
                <Image src={top} size="large" />
                <Divider hidden />
                <Image src={bottom} size="large" />
              </Image.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <h3>Profile Setup</h3>
              <Divider />
              <Form>
                <h5>I am a ...</h5>
                <Form.Group inline>
                  <Form.Radio
                    label="Regular User or Patient"
                    value="ru"
                    checked={value === "ru"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="Care Giver"
                    value="cg"
                    checked={value === "cg"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="Researcher"
                    value="re"
                    checked={value === "re"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="Medical or Healthcare Professional"
                    value="mp"
                    checked={value === "mp"}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Divider hidden />
                {value && value == "mp" ? (
                  <>
                    <p>
                      Please fill the information as they appear on official
                      records. Help us provide you with a better experience.
                      Your data is private and always will be.
                    </p>
                    <Form.Select
                      fluid
                      label="My profession is"
                      options={optionsMHP}
                      placeholder="Nurse, Doctor, Specialized ..."
                    />
                    <Form.Select
                      placeholder="Select Country of Residence"
                      fluid
                      search
                      selection
                      label="Location"
                      options={countryOptions}
                    />
                    <Form.Group widths={2}>
                      <Form.Select
                        fluid
                        label="Licensing Board"
                        options={optionsLB}
                        placeholder="Select Licensing Board"
                      />
                      <Form.Input
                        label="Licensing Board Identification"
                        placeholder="ID issued by board"
                      />
                    </Form.Group>
                    <Form.Input
                      label="Specify Practice"
                      placeholder="Licensed practice, specialization"
                    />
                    <Divider hidden />
                    <h5>
                      As a medical/healthcare professional member of this
                      platform I'm will ...{" "}
                    </h5>
                    <Form.Group widths={3}>
                      <Form.Radio label="Ask Questions" value="askq" />
                      <Form.Radio label="Answer Questions" value="ansq" />
                      <Form.Radio label="Research" value="re" />
                    </Form.Group>
                    <Divider hidden />
                    <div className="onboardSumbit">
                      <Button
                        type="submit"
                        href="/forums"
                        size="big"
                        style={{ backgroundColor: "#239e79", color: "white" }}
                      >
                        Submit
                        <Icon name="angle right" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5>As a member of this platform I will ... </h5>
                    <p>
                      Help us provide you with a better experience. Your data is
                      private and always will be. Please check all that apply.
                    </p>
                    <Form.Group widths={2}>
                      <Form.Radio label="Ask Questions" value="askq" />
                      <Form.Radio label="Answer Questions" value="ansq" />
                    </Form.Group>
                    <Form.Group widths={2}>
                      <Form.Radio label="Provide Support" value="ps" />
                      <Form.Radio label="Research Activites" value="ra" />
                    </Form.Group>

                    <Divider hidden />
                    <h5>I'd like to understand more about ... </h5>
                    <Dropdown
                      placeholder="Interests"
                      fluid
                      multiple
                      selection
                      options={topicOptions}
                    />
                    <h5>
                      I'm specifically interested in the following services ...{" "}
                    </h5>
                    <Dropdown
                      placeholder="Interests"
                      fluid
                      multiple
                      selection
                      options={}
                    />
                    <Divider hidden />
                    <Form.Group widths="equal">
                      <Form.Input
                        fluid
                        label="Date of Birth"
                        placeholder="MM-DD-YYYY"
                      />
                      <Form.Select
                        fluid
                        label="Gender"
                        options={optionsGender}
                        placeholder="Gender"
                      />
                      <Form.Select
                        fluid
                        label="Education Level"
                        options={optionsEducation}
                        placeholder="Education"
                      />
                    </Form.Group>
                    <Divider hidden />
                    <div className="onboardSumbit">
                      <Button
                        type="submit"
                        href="/forums"
                        size="big"
                        style={{ backgroundColor: "#239e79", color: "white" }}
                      >
                        Submit
                        <Icon name="angle right" />
                      </Button>
                    </div>
                  </>
                )}
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Onboard;
