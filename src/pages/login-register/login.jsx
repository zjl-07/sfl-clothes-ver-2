import React, { Component } from "react";
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailLoginStart } = this.props;
    const { email, password } = this.state;

    emailLoginStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { loginWithGoogle } = this.props;
    return (
      <FormContainer>
        <TitleContainer>Login</TitleContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  loginWithGoogle: () => dispatch(googleLoginStart()),
  emailLoginStart: (email, password) =>
    dispatch(emailLoginStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
