import { useState } from "react";
import AddGamers from "./AddGamers";
import GameRoom from "./GameRoom";

const Game = () => {
    const playerArray = [];
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState("");

    const newPlayer = ({ target }) => {
        setPlayerName(target.value);
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }

    const addHandler = () => {
        setPlayers(players => [...players, playerName]);
    }
    return (
        <>
            <AddGamers
                functionProp={newPlayer}
                submitHandler={preventDefault}
                addHandler={addHandler}
            />
            <GameRoom
                players={players}
            />
        </>
    )
}

export default Game;