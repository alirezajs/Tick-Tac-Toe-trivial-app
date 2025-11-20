import React, { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="PLAYER 1" symbol="X" isActive={currentPlayer === 'X'} />
          <Player name="PLAYER 2" symbol="O" isActive={currentPlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
