import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingContainer.css';

const TypingContainer = ({selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange}) =>{
    return (
          <div className="typing-challenge-container">
              <div className="details-container">
        	       <ChallengeDetailsCard cardName="Words" cardValue={words} />
                   <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                   <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
              </div>
              <div className="typewriter-container">
                  <TypingChallenge 
                  onInputChange={onInputChange}
                  testInfo={testInfo}
                  timeRemaining={timeRemaining} 
                  timerStarted={timerStarted} 
                   selectedParagraph={selectedParagraph} />
              </div>
          </div>
    );
}

export default TypingContainer;
