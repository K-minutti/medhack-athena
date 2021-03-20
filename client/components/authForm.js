import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Container, Form, Segment } from "semantic-ui-react";
import { auth } from "../store";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <Container>
      <Segment raised>
        <Form onSubmit={handleSubmit} name={name} className="login-signup">
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" />
            <Form.Input label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Location" placeholder="City" />
            <Form.Input label="Phone" placeholder="Optional" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Email"
              placeholder="Enter a valid email address"
            />
            <Form.Input label="Password" placeholder="Minimum 5 characters" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">{displayName}</Button>
          {error && error.response && <div> {error.response.data} </div>}
        </Form>
      </Segment>
    </Container>
  );
};
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Log In",
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
