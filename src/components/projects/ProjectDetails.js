import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

function ProjectDetails(props) {
    //console.log(props)
    const {project, auth} = props;
    if (!auth.uid) return <Redirect to = '/login'/>

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-1">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd September, 2019.</div>
                    </div>
                </div>
            </div>
        ) 
    }
    else {
        return(
            <div className="container center">
            <p>Loading project...</p>
        </div>
        ) 
    }
    
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project:project,
        auth : state.firebase.auth
    }
}
export default compose(connect(mapStateToProps), firestoreConnect(['project']))(ProjectDetails)

