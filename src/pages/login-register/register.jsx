import React, { Component } from "react";
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

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;
    const { registerStart } = this.props;
    if (password !== confirmPassword) {
      alert("Password not matched!");
      return;
    }

    registerStart({ displayName, password, email });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <FormContainer>
        <TitleContainer>Register</TitleContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="displayName"
            type="text"
            label="Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
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
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  registerStart: userData => dispatch(registerStart(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
