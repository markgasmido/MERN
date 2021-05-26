const GameRoom = ({ players }) => {

    const Display = ({ playerName }) => <li> {playerName} </li>

    return (
        <ul>
            {players.map((playerName, i) => (
                <Display key={i} playerName={playerName} />
            ))}
        </ul>
    )
}

export default GameRoom;