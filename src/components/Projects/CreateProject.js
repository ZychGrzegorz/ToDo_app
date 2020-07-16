import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = { title: "", content: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="signInContainer formContainer">
        <form onSubmit={this.handleSubmit} className="signIn userForm">
          <h5 className="signIn formTitle">Create Project</h5>

          <div className="inputField userInput">
            <label htmlFor="title" className="titleLbl inputLbl">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="input"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputField userInput">
            <label htmlFor="content" className="passwordLbl inputLbl">
              Project Content
            </label>
            <textarea
              id="content"
              className="textarea input"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="inputField userInput">
            <button className="btnSignIn btnForm">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
