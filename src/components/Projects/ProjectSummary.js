import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="cardContent">
        <span className="cardTitle">{project.title}</span>
        <p className="paragraphAuthor">
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="paragraphDate">
          {moment(project.createAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
