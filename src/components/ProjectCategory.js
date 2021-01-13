import React from "react";

const ProjectCategory = ({ categories, filterProjects }) => {
  let allBtns = document.querySelectorAll(".btn");
  const addClass = (e) => {
    allBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <div className="card project-categories">
      <div className="card-btn-container">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              className="btn btn-outline"
              onClick={(e) => {
                addClass(e);
                filterProjects(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCategory;
