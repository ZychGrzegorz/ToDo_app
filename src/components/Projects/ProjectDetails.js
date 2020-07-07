import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="projctDetails">
      <div className="card">
        <div className="cardContent">
          <span className="cardTitle">Project Title - {id}</span>
          <p className="cardDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sed officia ut voluptates esse quo quaerat consequatur debitis,
            cupiditate reiciendis.
          </p>
        </div>
        <div className="cardDetails">
          <p className="paragraphAuthor">Posted by Adam Mickiewicz</p>
          <p className="paragraphDate"> 3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
