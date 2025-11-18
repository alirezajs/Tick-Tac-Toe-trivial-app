import { useState } from 'react'


export default function Player( { name:initialName, symbol }) {
  const [playerName, setPlayerName]= useState(initialName);
  const [ isEdited, setIsEdited ] = useState(false);
  const handleEditClick= ()=>{
    setIsEdited((wasEdited)=> !wasEdited)
  }
  const handleInputChange= (event)=>{
     setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{ playerName }</span>;
  if( isEdited ){
    editablePlayerName = <input type='text' required value={playerName} onChange={handleInputChange}/>
  }

  return (
    <>
    <li>
      <span className="player">
        {editablePlayerName}
       <span className="player-name">{ symbol }</span>
       <button onClick={handleEditClick}>{isEdited ? 'save' : 'edit'}</button>
      </span>
    </li>
    </>
  )
}