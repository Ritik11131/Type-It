import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingContainer from '../TypingContainer/TypingContainer';

import './Test.css';

const Test = ({selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain}) =>{
    return (
        <div className="test-container">
            {
                timeRemaining > 0?(
                    <div data-aos="fade-up" className="typing-container">
                    <TypingContainer 
                    timeRemaining={timeRemaining}
                    selectedParagraph={selectedParagraph}
                    timerStarted={timerStarted} 
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                     />
                </div>

                ) :(
                    <div className="try-again">
                    <TryAgain words={words} 
                    characters={characters}
                     wpm={wpm}
                     startAgain={startAgain}/>
                </div> 
                )
            }
           
           
        </div>
    );
}

export default Test;