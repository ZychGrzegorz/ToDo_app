import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = { email: "", password: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="signInContainer formContainer">
        <form onSubmit={this.handleSubmit} className="signIn userForm">
          <h5 className="signIn formTitle">Sign In</h5>

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
            <button className="btnSignIn btnForm">Login</button>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
