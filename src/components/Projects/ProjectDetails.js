import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="projctDetails">
        <div className="card">
          <div className="cardContent">
            <span className="cardTitle">{project.title}</span>
            <p className="cardDescription">{project.content}</p>
          </div>
          <div className="cardDetails">
            <p className="paragraphAuthor">
              Posted by {project.authorFirstName} {project.authorLastName}
            </p>
            <p className="paragraphDate"> 3rd September, 2am</p>
          </div>
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
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
