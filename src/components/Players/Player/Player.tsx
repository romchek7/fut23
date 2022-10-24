import React from "react";
import {IPlayer} from "../../../redux/types/playersType";
import styles from "./Player.module.css";
import card from "../../../assets/img/card.png";
import icon from "../../../assets/img/account.png";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {Link} from "react-router-dom";

interface IPlayerProps {
    player: IPlayer
}

const Player: React.FC<IPlayerProps> = ({player}) => {
    return (
        <div className={styles.playerBox}>
            <img src={card} className={styles.card}/>
            <div className={styles.cardWrapper}>
                <span className={`fi fi-${player.country.country_code}`}></span>
                <img src={player.img ? player.img : icon}/>
            </div>
            <Link to={`/player/${player.player_id}`} target='_blank'>
                <p>{player.firstname} {player.lastname}</p>
            </Link>
            <p>{player.birthday}</p>
        </div>
    )
}

export default Player