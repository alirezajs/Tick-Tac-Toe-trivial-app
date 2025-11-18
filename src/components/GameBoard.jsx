import { useState } from "react";

const initialGameBoard= [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ],
];

export default function GameBoard() {

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard)=> {
      const updateBoard= [...prevGameBoard.map(row=> [...row])]; // create a new array with all new arrays inside
      updateBoard[rowIndex][colIndex] = 'x'; 
      return updateBoard;
    })
  }
  return <>
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
           {row.map((playerSymbol, colIndex) => (
            <li>
              <button onClick={()=>handleSelectSquare(rowIndex,colIndex)} key={colIndex} data-row={rowIndex} data-cell={colIndex}>
                {playerSymbol}
              </button>
            </li>
          ))}
          </ol>
        </li>
      ))}
    </ol>
  </>
}