import React, { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINING_COMBINATIONS } from './winning-combinations';
import GameOver from './GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: 'PLAYER 1', O: 'PLAYER 2' });

  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((row) => [...row])];
  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // Determine winner by checking each winning combination on the board.
  // A winning combination is when all three cells are the same non-null symbol.
  let winner = null;

  for (const combo of WINING_COMBINATIONS) {
    const [a, b, c] = combo;
    const symA = gameBoard[a.row][a.col];
    const symB = gameBoard[b.row][b.col];
    const symC = gameBoard[c.row][c.col];

    if (symA && symA === symB && symA === symC) {
      // symA is 'X' or 'O'
      winner = players[symA];
      break;
    }
  }
  const hasDraw = !winner && gameTurns.length === 9;

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

  function handleRestartGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="PLAYER 1"
            symbol="X"
            isActive={currentPlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="PLAYER 2"
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
