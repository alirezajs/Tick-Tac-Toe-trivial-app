import Player from './components/player'
function App() {

  return (
    <>
  <div id="game-container">
      <ol id="players">
        <Player name="PLAYER1" symbol="x"/>
        <Player name="PLAYER1" symbol="o"/>
      </ol>
    </div>
    </>
  )
}

export default App
