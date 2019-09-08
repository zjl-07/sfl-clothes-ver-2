import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "components/form-input";
import Button from "components/button";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form">
        <h1 className="title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <Button type="submit">Submit</Button>

          <div className="u-margin-top-small">
            Don't have any account?
            <Link to="/register"> Register Here!</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
