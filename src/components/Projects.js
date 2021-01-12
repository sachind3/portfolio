import React, { useState } from 'react'
import Pagination from "react-js-pagination";
const Projects = ({ projects }) => {

    console.log(projects.length);
    // current page
    const [currentPage, setCurrentPage] = useState(1);

    // total records per page to display
    const recordPerPage = 3;

    // total number of the records
    const totalRecords = projects.length;

    // range of pages in paginator
    const pageRange = 3;

    // handle change event
    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);

        // call API to get data based on pageNumber
    }
    return (<div className="project-grid">
        {
            projects.map((project) => {
                const { id, title, image, tags, category, detail, demoLink, gitLink } = project
                return (
                    <div key={id} className="card">
                        <img src={image} alt={title} />
                        <div className="tags">
                            {
                                tags.map((tag, index) => {
                                    return <span key={index}>#{tag}</span>
                                })
                            }
                        </div>
                        <h4>{title}</h4>
                        <p>{detail}</p>
                        <div className="card-btn-container">
                            <a href="./" className="btn btn-solid">Demo</a>
                            <a href="./" className="btn btn-outline">Code</a>
                        </div>
                    </div>
                )
            })
        }
        <Pagination
            itemClass="page-item" // add it for bootstrap 4
            linkClass="page-link" // add it for bootstrap 4
            activePage={currentPage}
            itemsCountPerPage={recordPerPage}
            totalItemsCount={totalRecords}
            pageRangeDisplayed={pageRange}
            onChange={handlePageChange}
        />
    </div>)
}
export default Projects