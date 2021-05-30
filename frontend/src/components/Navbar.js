import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const guestLinks = () => (
        <Fragment>
            <li class="nav-item">
                <Link class="nav-link" to="/login">Login/Signup</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li class="nav-item">
            <a class="nav-link" href="#!" onClick={logout}>Logout</a>
        </li>

    );


return (
    <>
    <body>
    <div className="container-fluid m-0 p-0">
        <nav class="navbar navbar-expand-xl navbar-dark" id="nav-colors">
        <button class="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to="/">SafeTree First<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            {isAuthenticated ?  authLinks() : guestLinks()}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
                
            </li>
            </ul>
            <a class="nav-link" href="#!" onClick={logout}>Logout</a>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </div>
        </nav>
        </div>
        </body>
    </>
)
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(Navbar);