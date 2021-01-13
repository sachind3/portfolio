import React, { useState } from "react";

const Projects = ({ projects }) => {
  console.log(projects.length);
  // current page

  return (
    <div className="project-grid">
      {projects.map((project) => {
        const {
          id,
          title,
          image,
          tags,
          category,
          detail,
          demoLink,
          gitLink,
        } = project;
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
