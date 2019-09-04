import React from 'react';
import {NavLink} from 'react-router-dom';

function SignedOutLinks() {
    return (
        <div>
            <ul className = 'right'>
                <li><NavLink to = '/register'>SIGNUP</NavLink></li>
                <li><NavLink to = '/login'>LOGIN</NavLink></li>
            </ul>  
        </div>
    )
}

export default SignedOutLinks
