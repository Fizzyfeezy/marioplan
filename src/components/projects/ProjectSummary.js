import React from 'react'

function ProjectSummary({project}) {
    return (
        <div className="card grey lighten-1 z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                {/* <p>{project.content}</p> */}
                <p>Posted by Net Ninja</p>
                <p className = "grey-text">3rd September, 2019</p>
            </div>
        </div>
    )
}

export default ProjectSummary
