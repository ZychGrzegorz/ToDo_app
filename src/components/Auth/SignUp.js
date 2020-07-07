import React, { Component } from "react";

class SignUp extends Component {
  state = { email: "", password: "", firstName: "", lastName: "" };
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
      <div className="signUpContainer formContainer">
        <form onSubmit={this.handleSubmit} className="signUp userForm">
          <h5 className="signUp formTitle">Sign Up</h5>

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
            <label htmlFor="firstName" className="firstNameLbl inputLbl">
              First Name
            </label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="inputField userInput">
            <label htmlFor="lastName" className="lastNameLbl inputLbl">
              Last Name
            </label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="inputField userInput">
            <button className="btnSignUp btnForm">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
