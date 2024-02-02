import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // const { name, about, technologies } = project;
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((project) => (
        // Each ProjectItem component gets a unique key prop based on the project id
        <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
      ))}</div>
    </div>
  );
}

export default ProjectList;
