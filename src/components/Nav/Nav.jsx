import React from 'react';
import logo from './../../assets/logo.jpg';
import './Nav.css';

const Nav = () =>{
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo"/>
                <p className="flash-logo-text">TYPE QUICK</p>
            </div>
            <div className="nav-right">
                <a target="_blank"
                className="nav-aaa-link"
                 href="https://ritik11131.github.io/Just-Name-It/"
                 rel="noreferrer">
                     Wanna Try Something ?
                     </a> 
            </div>
        </div>
    );
}

export default Nav;
