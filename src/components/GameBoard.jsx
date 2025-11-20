import React from 'react';
import PropTypes from 'prop-types';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  // This is call driving the game board
  let gameBoard = initialGameBoard;

  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    disabled={playerSymbol !== null}
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    data-row={rowIndex}
                    data-cell={colIndex}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  turns: PropTypes.arrayOf(
    PropTypes.shape({
      square: PropTypes.shape({
        row: PropTypes.number.isRequired,
        col: PropTypes.number.isRequired,
      }).isRequired,
      player: PropTypes.string.isRequired,
    })
  ).isRequired,
};
