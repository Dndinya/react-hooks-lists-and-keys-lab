import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  // const { name, about, technologies } = project;
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
         /* Map through the technologies array and create a span for each technology */}
         {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))
        
      }
      </div>
    </div>
  );
}

export default ProjectItem;
