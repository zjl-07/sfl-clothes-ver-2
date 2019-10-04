import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Input from "components/form/form-input";
import Button from "components/button/button";
import { FormContainer } from "components/form/form-input.style";
import { registerStart } from "redux/user/user.action";
import {
  TitleContainer,
  ButtonsContainer,
  DetailsContainer
} from "./login-register.style";

const Register = ({ registerStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, password, confirmPassword, email } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched!");
      return;
    }

    registerStart({ displayName, password, email });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer>
      <TitleContainer>Register</TitleContainer>
      <form onSubmit={handleSubmit}>
        <Input
          name="displayName"
          type="text"
          label="Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <ButtonsContainer center>
          <Button type="submit">Create Account</Button>
        </ButtonsContainer>

        <DetailsContainer>
          Already have account?
          <Link to="/login"> Login Here!</Link>
        </DetailsContainer>
      </form>
    </FormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  registerStart: userData => dispatch(registerStart(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
