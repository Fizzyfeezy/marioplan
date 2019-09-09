import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authAction'

function SignedInLinks(props) {
    const {profile}= props;
    return (
        <div>
            <ul className = 'right'>
                <li><NavLink to = '/create'>New Pojects</NavLink></li>
                <li><a onClick = {props.signOut}>Log out</a></li>
                <li><NavLink to = '/' className = "btn btn-floating blue lighten-2">{profile.initials}</NavLink></li>
            </ul>  
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
