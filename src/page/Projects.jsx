import React, { useState } from "react";
import { projects } from "./Project-list";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of projects to show
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Toggle between showing all projects and showing only the first three
  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  

  return (
    <div className="container">
      <div className="heading">
        <h1>My Projects</h1>
        <div></div>
      </div>
      <p className="sub-head">
        Take a look at some of the projects I've worked on.
      </p>
      <div className="projects" id="projects">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            heading={project.heading}
            content={project.content}
            techstack={project.techstack}
          />
        ))}
      </div>
      <input
  type="button"
  className="show-more"
  onClick={toggleShowMore}
  value={showAll ? "Show Less" : "Show More"}

/>

    </div>
  );
};

export default Projects;
