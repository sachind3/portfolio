import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const { id, title, image, tags, detail } = project;
        return (
          <div key={id} className="card">
            <img src={image} alt={title} />
            <div className="tags">
              {tags.map((tag, index) => {
                return <span key={index}>#{tag}</span>;
              })}
            </div>
            <h4>{title}</h4>
            <p>{detail}</p>
            <div className="card-btn-container">
              <a href="./" className="btn btn-solid">
                Demo
              </a>
              <a href="./" className="btn btn-outline">
                Code
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
