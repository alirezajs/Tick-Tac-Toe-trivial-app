import React from 'react';
import PropTypes from 'prop-types';

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}}`}>
          Player {turn.player} selected {turn.square.row + 1},{' '}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

Log.propTypes = {
  turns: {
    playerName: PropTypes.string,
    symbol: PropTypes.string,
  },
};
