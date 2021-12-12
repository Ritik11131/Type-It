import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
 
const Footer = () =>{
    return (
        <div className="footer-container">
            <div className="footer-icon"><FaGithub size='50px' padding='20px'/></div>
            <a href="https://github.com/Ritik11131"
            className="footer-link"
            target="_blank"
            rel="noreferrer">
                
                Follow_for_more
            </a>
        </div>
    );
}

export default Footer;