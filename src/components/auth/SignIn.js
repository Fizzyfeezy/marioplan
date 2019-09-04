import React, { Component } from 'react';
import './auth.css'

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
        console.log(this.state)
    }
  render() {
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
                    </div>
                </form>
            </div>
        </div> 
      </div>
    );
  }
}

export default SignIn;
