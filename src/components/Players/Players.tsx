import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPlayersSelector} from "../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../hooks/useDispatchPlayers";
import {IPlayer} from "../../redux/types/playersType";

const Players = () => {
    const {fetchPlayers} = useDispatchPlayers()

    const {players, loading, error} = useSelector(fetchPlayersSelector)

    const [playersState, setPlayersState] = useState<IPlayer[]>([])
    const [next, setNext] = useState(2)

    useEffect(() => {
        fetchPlayers(48)
    }, [])

    useEffect(() => {
        setPlayersState(players.filter((player: IPlayer, idx) => idx < next))
    }, [players, next])

    return (
        <>
            <div>
                {playersState.map(player => <div>
                    <p>{player.player_id}</p>
                    <p>{player.firstname} {player.lastname}</p>
                    <p>{player.country.name}</p>
                    <p>{player.birthday}</p>
                    <br/><br/><br/>
                </div>)}

                <button onClick={() => {
                    setNext(next+1)
                }}>Next</button>
            </div>
        </>
    )
}

export default Players