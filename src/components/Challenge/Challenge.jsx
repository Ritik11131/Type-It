import React from 'react';
import Test from '../Test/Test';
import './Chalenge.css';

const Challenge = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
onInputChange,
startAgain}) =>{
    return(
        <div className="challenge-container">
          <h1 data-aos="fade-down" className="challenge-header">Take a speed test now!</h1>
          <Test 
          selectedParagraph={selectedParagraph}
          timerStarted={timerStarted} 
          timeRemaining={timeRemaining}
          words={words} 
          characters={characters}
          wpm={wpm}
          testInfo={testInfo}
          startAgain={startAgain}
          onInputChange={onInputChange}/>
        </div>
    );
}

export default Challenge;