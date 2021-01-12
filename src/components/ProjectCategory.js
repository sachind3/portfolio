import React from 'react'

const ProjectCategory = ({ categories, filterProjects }) => {
    return (<div className="card project-categories">
        <div className="card-btn-container">
            {
                categories.map((category, index) => {
                    return (<button key={index} type="button" className="btn btn-outline" onClick={() => filterProjects(category)}>{category}</button>)
                })
            }
        </div>
    </div>)
}
export default ProjectCategory