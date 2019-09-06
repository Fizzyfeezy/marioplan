import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import Logo from './mario.png';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

function Navbar() {
    return (
        <div>
            <nav className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link to = '/' className="brand-logo">
                        <img src = {Logo} width="50" height="50" alt="mario plan"/>    
                    </Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>   
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        signIn : signIn.dis
    }
}

export default connect(mapStateToProps)(Navbar)
