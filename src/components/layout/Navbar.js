import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import Logo from './mario.png';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

function Navbar(props) {
    const  {auth} = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <div>
            <nav className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link to = '/' className="brand-logo">
                        <img src = {Logo} width="50" height="50" alt="mario plan"/>    
                    </Link>
                    {auth.isLoaded && links}
                </div>   
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
