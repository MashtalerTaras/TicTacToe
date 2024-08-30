const Log = ({turns}) => {
  return (
    <ol id="log">
      {turns?.map((turn, i) => (
        <li className={turn.length === i? 'highlight-player' : undefined} key={`${turn.square.row}-${turn.square.col}`}>
          {turn.player} selected {turn.square.row}-{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
