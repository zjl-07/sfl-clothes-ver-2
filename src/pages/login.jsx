import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "components/form-input";
import Button from "components/button";
import { auth, signInWithGoogle } from "firebase/firebase.utils";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async () => {
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log("Login Failed", err.mesaage);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form">
        <h1 className="title">Login</h1>
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
          <div className="buttons">
            <Button type="submit">Submit</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>

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
