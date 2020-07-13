import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="projectCard">
      <div className="cardContent">
        <span className="cardTitle">{project.title}</span>
        <p className="paragraphAuthor">Posted by Adam Mickiewicz</p>
        <p className="paragraphDate"> 3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
