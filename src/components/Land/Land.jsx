import React from 'react';
import './Land.css';
import Typewriter from 'typewriter-effect';
import back from './../../assets/back.jpg';



const Land = () =>{
    return (
        <div className="land-container">
            <div data-aos="fade-up"
     data-aos-duration="3000" className="land-left">
                <h1 className="land-header">CAN YOU TYPE ...</h1>
                <div  className="typewriter-container">
                   <Typewriter 
                   options = {{
                       strings:['Fast?','Correct?','Quick?'],
                       autoStart:true,
                       loop:true,
                   }}
                   />
                </div>
            </div>
            <div className="land-right">
                <img className="flash-image" src={back} alt="hero" />
            </div>
        </div>
    );
}
export default Land;

