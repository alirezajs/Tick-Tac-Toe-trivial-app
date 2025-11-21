import React from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './GameOver';
import useGame from './hooks/useGame';

function App() {
  const {
    players,
    currentPlayer,
    gameBoard,
    winner,
    hasDraw,
    gameTurns,
    handleSelectSquare,
    handleRestartGame,
    handlePlayerNameChange,
  } = useGame();

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={currentPlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={currentPlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestartGame={handleRestartGame} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </>
  );
}

export default App;
