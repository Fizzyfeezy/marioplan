import React, { Component } from 'react';
import './project.css'
import { createProject } from '../../store/actions/projectAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             content: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
        this.setState({
            title: '',
            content: ''
        })
    }
  render() {
    const {auth} = this.props
    if (!auth.uid) return <Redirect to = '/login'/>
    return (
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <div className="container space">
                <form onSubmit = {this.handleSubmit} className = "white">
                    <div className="row">
                        <div className="col s10 offset-s1 m10 offset-m1">
                            <h5 className = "grey-text text-darken-3">Create Project</h5>
                            <div className="input-field">
                                <input id="title" type="text" className="validate" value = {this.state.title} onChange = {this.handleChange}/>
                                <label htmlFor="title">Title</label>
                            </div>
                            <br/>
                            <div className="input-field">
                                <textarea id="content" className="materialize-textarea" data-length="500" value={this.state.content} onChange={this.handleChange}></textarea>
                                <label htmlFor="content">Content</label>
                            </div>
                            <br/>
                            <div className="input-field">
                                <button className = "btn blue lighten-2 z-depth-0">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
