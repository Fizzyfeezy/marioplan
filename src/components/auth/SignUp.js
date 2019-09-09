import React, { Component } from 'react';
import M from 'materialize-css';
import './auth.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authAction';

class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             firstname: '',
             lastname: '',
             phonenumber: '',
             gender:'',
             confirmpassword: ''
        }
    }
    componentDidMount(){
          document.addEventListener('DOMContentLoaded', function() {
            let options = { inDuration: 300, outDuration: 300, hover: true, coverTrigger: false};
            const elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, options);
          })
    }
    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    selectChange = e => {
        this.setState({
            gender: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.setState({
            email: '',
             password: '',
             firstname: '',
             lastname: '',
             phonenumber: '',
             gender:'',
             confirmpassword: ''
        })
    }
  render() {
    const {auth, authError} = this.props
    if (auth.uid) return <Redirect to = '/' />
    return (
      <div className="container space">
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <form onSubmit = {this.handleSubmit} className = "white">
                    <h5 className = "grey-text text-darken-3">Register</h5>
                    
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input id="firstname" type="text" className="validate" value = {this.state.firstname} onChange = {this.handleChange}/>
                                <label htmlFor="firstname">First Name</label>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input id="lastname" type="text" className="validate" value = {this.state.lastname} onChange = {this.handleChange}/>
                                <label htmlFor="lastname">Last Name</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input id="phonenumber" type="number" className="validate" value = {this.state.phonenumber} onChange = {this.handleChange}/>
                                <label htmlFor="phonenumber">Phone Number</label>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <select onChange={this.selectChange}>
                                    <option value="" disabled active>sex</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <label htmlFor="gender">Gender</label>
                            </div>
                        </div>
                    </div>
                    
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
                        <input id="confirmpassword" type="password" className="validate" value = {this.state.confirmpassword} onChange = {this.handleChange}/>
                        <label htmlFor="confirmpassword">Confirm Password</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <button className = "btn blue lighten-2 z-depth-0">Register</button>
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
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
