import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="projectDetails">
        <div className="content">
          <span className="title">{project.title}</span>
          <p className="description">{project.content}</p>
        </div>
        <div className="details">
          <p className="author">
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="date">{moment(project.createAt.toDate()).calendar()}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cardDetails">
        <p className="cardDescription"> Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
