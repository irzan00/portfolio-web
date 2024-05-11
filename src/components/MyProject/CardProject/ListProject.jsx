import React from "react";
import CardProject from "./CardProject";

function ListProject({ projects }) {
  return (
    <div className="list-project d-flex">
      {projects.length ? (
        projects.map((project) => (
          <CardProject
            key={project.id}
            link={project.link}
            image={project.image}
            type={project.type}
            tag1={project.tag1}
            tag2={project.tag2}
            title={project.title}
          />
        ))
      ) : (
        <p className="text-center">No Project Here</p>
      )}
    </div>
  );
}

export default ListProject;
