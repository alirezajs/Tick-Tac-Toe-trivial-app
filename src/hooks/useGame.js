import { useCallback, useMemo, useState } from 'react';
import { WINING_COMBINATIONS } from '../winning-combinations';

const createEmptyBoard = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function useGame(
  initialPlayers = { X: 'PLAYER 1', O: 'PLAYER 2' }
) {
  const [players, setPlayers] = useState(initialPlayers);
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = useMemo(() => {
    if (gameTurns.length === 0) return 'X';
    // turns are stored newest-first in this project
    return gameTurns[0].player === 'X' ? 'O' : 'X';
  }, [gameTurns]);

  const gameBoard = useMemo(() => {
    const board = createEmptyBoard();
    for (const turn of gameTurns) {
      const { square, player } = turn;
      board[square.row][square.col] = player;
    }
    return board;
  }, [gameTurns]);

  const winner = useMemo(() => {
    for (const combo of WINING_COMBINATIONS) {
      const [a, b, c] = combo;
      const symA = gameBoard[a.row][a.col];
      const symB = gameBoard[b.row][b.col];
      const symC = gameBoard[c.row][c.col];
      if (symA && symA === symB && symA === symC) {
        // return the player name mapped from symbol
        return players[symA];
      }
    }
    return null;
  }, [gameBoard, players]);

  const hasDraw = useMemo(() => {
    const boardFull = gameBoard.every((row) =>
      row.every((cell) => cell !== null)
    );
    return !winner && boardFull;
  }, [gameBoard, winner]);

  const handleSelectSquare = useCallback(
    (rowIndex, colIndex) => {
      if (winner) return;
      if (gameBoard[rowIndex][colIndex]) return;
      setGameTurns((prev) => [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ]);
    },
    [currentPlayer, gameBoard, winner]
  );

  const handleRestartGame = useCallback(() => {
    setGameTurns([]);
  }, []);

  const handlePlayerNameChange = useCallback((symbol, newName) => {
    setPlayers((prev) => ({ ...prev, [symbol]: newName }));
  }, []);

  return {
    players,
    currentPlayer,
    gameBoard,
    winner,
    hasDraw,
    gameTurns,
    handleSelectSquare,
    handleRestartGame,
    handlePlayerNameChange,
  };
}
