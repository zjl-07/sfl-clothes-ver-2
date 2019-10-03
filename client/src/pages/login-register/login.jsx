import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { googleLoginStart, emailLoginStart } from "redux/user/user.action";
import Input from "components/form/form-input";
import Button from "components/button/button";
import { FormContainer } from "components/form/form-input.style";
import {
  TitleContainer,
  ButtonsContainer,
  DetailsContainer
} from "./login-register.style";

const Login = ({ loginWithGoogle, emailLoginStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailLoginStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <FormContainer>
      <TitleContainer>Login</TitleContainer>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={loginWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </ButtonsContainer>

        <DetailsContainer>
          Don't have any account?
          <Link to="/register"> Register Here!</Link>
        </DetailsContainer>
      </form>
    </FormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  loginWithGoogle: () => dispatch(googleLoginStart()),
  emailLoginStart: (email, password) =>
    dispatch(emailLoginStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
