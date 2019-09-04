import React from 'react';
import {NavLink} from 'react-router-dom';

function SignedInLinks() {
    return (
        <div>
            <ul className = 'right'>
                <li><NavLink to = '/create'>New Pojects</NavLink></li>
                <li><NavLink to = '/logout'>Log out</NavLink></li>
                <li><NavLink to = '/' className = "btn btn-floating blue lighten-2">NN</NavLink></li>
            </ul>  
        </div>
    )
}

export default SignedInLinks
