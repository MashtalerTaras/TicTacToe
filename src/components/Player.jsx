import { useState } from 'react';

const Player = ({name, symbol, isActive, onPlayerNameChange}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEditing(state => !state);
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    };
  };

  const handleChange = ({target: {value}}) => {
    setPlayerName(value);
  }

  return (
    <li className={isActive ? 'active' : 'undefined'}>
      <span className="player">
        {isEditing && <input required defaultValue={playerName} onChange={handleChange} />}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className='player-symbol'>{symbol}</span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  )
}

export default Player;
