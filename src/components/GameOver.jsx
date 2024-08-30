const GameOver = ({winnerName, onRestart}) => {
  return (
    <div id="game-over">
      <h2>Game over</h2>
      {winnerName && <p>{winnerName} won</p>}
      {!winnerName && <p>It's Draw</p>}
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
};

export default GameOver;
