import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import Notification from './Notification';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const {projects, auth} = this.props
        if (!auth.uid) return <Redirect to = '/login'/>
        return (
            <div className="dashbord container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps),
firestoreConnect([{
    collection : 'projects'
}])
)(Dashboard)

//export default compose(firestoreConnect(['projects']),connect(mapStateToProps))(Dashboard)
