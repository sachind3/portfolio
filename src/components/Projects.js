import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Projects = ({ projects }) => {
  // Data to be rendered using pagination.

  const projectsPerPage = 3;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current projects
  const indexOfLastProject = activePage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const renderProjects = currentProjects.map((project, index) => {
    // return <li key={index}>{project.title}</li>;
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
  });

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="project-grid">{renderProjects}</div>
      <div className="pagination-row">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={3}
          totalItemsCount={projects.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Projects;
