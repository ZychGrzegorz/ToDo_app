import React, { Component } from "react";

class SignIn extends Component {
  state = { email: "", password: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="signInContainer formContainer">
        <form onSubmit={this.handleSubmit} className="signIn userForm">
          <h5 className="signIn formTitle">Sign In</h5>

          <div className="inputField userInput">
            <label htmlFor="email" className="emailLbl inputLbl">
              Email
            </label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="inputField userInput">
            <label htmlFor="password" className="passwordLbl inputLbl">
              Password
            </label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="inputField userInput">
            <button className="btnSignIn btnForm">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
