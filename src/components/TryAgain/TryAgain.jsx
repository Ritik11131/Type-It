import React from 'react';
import './TryAgain.css';


const TryAgain = ({words,characters,wpm,startAgain}) =>{
    return (
        <div className="try-again-container">
            <h1>TEST RESULTS</h1>
            <div className="result-container">
                <p>
                    <b>Characters-</b> [{characters}]
                </p>
                <p>
                    <b>Words-</b> [{words}]
                </p>
                <p>
                    <b>Speed-</b> [{wpm}] wpm
                </p>
            </div>

            <div>
                <button onClick={()=>startAgain()} className="end-btn start-again-btn">Re-try</button>
                <button onClick= {()=>{
                    window.open("http://www.facebook.com/sharer/sharer.php?u=Ritik11131.com","facebook-share-dialog","width=800,height=600")
                }} className="end-btn share-btn">Share</button>
                <button  onClick = {()=>{
                    window.open("http://twitter.com/intent/tweet?text-Ritik11131.com","Twitter","width=800,height=600")
                }} className="end-btn tweet-btn">Tweet</button>
            </div>
        </div>
    );
}

export default TryAgain;
