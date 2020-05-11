import React from 'react';
import { Game } from './components/game'
import { HighScore } from './components/high-score'

function App() {
  const [currentScore, setCurrentScore] = React.useState(null)

  function handlePlayAgainButtonClick() {
    setCurrentScore(null)
  }

  function handleGameFinished(time) {
    setCurrentScore(time)
  }

  if (currentScore) {
    return <HighScore
      currentScore={currentScore}
      onPlayAgainClick={handlePlayAgainButtonClick}
    />
  }

  return (
    <div>
      <Game gameFinished={handleGameFinished} />
    </div>
  );
}

export default App;
