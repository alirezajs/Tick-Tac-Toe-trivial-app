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
