import Player from './components/player';
import GameBoard from './components/GameBoard';

function App() {

  return (
    <>
  <div id="game-container">
      <ol id="players">
        <Player name="PLAYER1" symbol="x"/>
        <Player name="PLAYER1" symbol="o"/>
      </ol>
      <GameBoard />
    </div>
    </>
  )
}

export default App
