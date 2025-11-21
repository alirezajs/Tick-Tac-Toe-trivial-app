import React from 'react';
import PropTypes from 'prop-types';

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
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
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf([null, 'X', 'O'])))
    .isRequired,
};
