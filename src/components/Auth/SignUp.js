import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = { email: "", password: "", firstName: "", lastName: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="signUpContainer formContainer">
        <form onSubmit={this.handleSubmit} className="signUp userForm">
          <h5 className="signUp formTitle">Sign Up</h5>

          <div className="inputField userInput">
            <label htmlFor="email" className="emailLbl inputLbl">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputField userInput">
            <label htmlFor="password" className="passwordLbl inputLbl">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputField userInput">
            <label htmlFor="firstName" className="firstNameLbl inputLbl">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="input"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputField userInput">
            <label htmlFor="lastName" className="lastNameLbl inputLbl">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="input"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputField userInput">
            <button className="btnSignUp btnForm">Sign Up</button>
            <div className="errorInfo">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
