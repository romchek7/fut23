import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchPlayersSelector} from "../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../hooks/useDispatchPlayers";
import {IPlayer} from "../../redux/types/playersType";
import Player from "./Player/Player";
import styles from "./Players.module.css";

const Players: React.FC = () => {
    const {fetchPlayers} = useDispatchPlayers()

    const {players, loading, error} = useSelector(fetchPlayersSelector)

    const [playersState, setPlayersState] = useState<IPlayer[]>([])
    const [next, setNext] = useState(12)

    useEffect(() => {
        fetchPlayers(48)
    }, [])

    useEffect(() => {
        setPlayersState(players.filter((player: IPlayer, idx) => idx < next))
    }, [players, next])

    return (
        <div className={styles.playersMain}>
            <div className={styles.filtersMain}>

            </div>
            <div className={styles.playersListMain}>
                <div className={styles.playersWrapper}>
                    {playersState.map(player => <Player player={player}/>)}
                </div>
                <button onClick={() => {
                    setNext(next+1)
                }}>Next</button>
            </div>
        </div>
    )
}

export default Players