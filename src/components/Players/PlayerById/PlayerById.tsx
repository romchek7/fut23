import React, {useEffect} from "react";
import styles from "./PlayerById.module.css";
import {useSelector} from "react-redux";
import {getPlayerByIdSelector} from "../../../redux/selectors/playersSelector";
import useDispatchPlayers from "../../../hooks/useDispatchPlayers";
import {useParams} from "react-router-dom";
import icon from "../../../assets/img/account.png";

const PlayerById: React.FC = () => {
    const params = useParams()

    const {player, loading, error} = useSelector(getPlayerByIdSelector)

    const {getPlayerById} = useDispatchPlayers()

    useEffect(() => {
        if (params.player_id) {
            getPlayerById(+params.player_id)
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={styles.main}>
            {player &&
                <div className={styles.content}>
                    <img src={player.img ? player.img : icon}/>
                    <p>{player.firstname} {player.lastname}</p>
                    <p>Birthday: {player.birthday ? player.birthday : "No results"}</p>
                    <p>Age: {player.age ? player.age : "No results"}</p>
                    <p>Weight: {player.weight ? player.weight + ' kg' : "No results"}</p>
                    <p>Height: {player.height ? player.height + ' cm' : "No results"}</p>
                    <span>
                        <span className={`fi fi-${player.country.country_code}`}></span>
                        {player.country.name}
                    </span>
                </div>
            }
        </div>
    )
}

export default PlayerById