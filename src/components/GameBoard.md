```js
function handleSelectSquare(rowIndex, colIndex) {
  setGameBoard((prevGameBoard) => {
    prevGameBoard[rowIndex][colIndex] = 'x'; // you update the old value in old-memory immediately even before this scheduled state was executed by react
    return prevGameBoard;
  });
}
```

we could write the `handleSelectSquare` function in this way, but it is not recommended.
Objects & arrays (which technically are objects) are reference values in Javascript and you should update them in immutable way.In another word, should not mutate them directly-instead create a (deep) copy first.
so this is wrong

```js
const updatedUser = user;
user.name = 'Max';
```

and instead you create a copy of the old state then the you just change that copy instead of existing object ore array

```js
const updatedUser = { ...user };
updateUser.name = 'max';
```

For the sake of having less states with the same logic, we decided to refactor GamBoard again
so this is this state before latest updates

```js
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [...prevGameBoard.map((row) => [...row])]; // create a new array with all new arrays inside
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
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
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
```
