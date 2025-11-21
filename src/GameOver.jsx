import React from 'react';
import PropTypes from 'prop-types';

export default function GameOver({ winner, onRestartGame }) {
  return (
    <div id="game-over">
      {winner ? <p>Player {winner} wins!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={onRestartGame}>Restart Game</button>
      </p>
    </div>
  );
}

GameOver.propTypes = {
  winner: PropTypes.oneOf([null, 'X', 'O']),
  onRestartGame: PropTypes.func.isRequired,
};
GameOver.defaultProps = {
  winner: null,
};
