import React, { Component } from 'react';
import './auth.css';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authAction'

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
        console.log(this.state)
    }
  render() {
      const {authError} = this.props
    return (
      <div className="container space">
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <form onSubmit = {this.handleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <input id="email" type="email" className="validate" value = {this.state.email} onChange = {this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input id="password" type="password" className="validate" value = {this.state.password} onChange = {this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <button className = "btn blue lighten-2 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null }
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
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
