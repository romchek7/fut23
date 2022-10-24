import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTopScorersSelector} from "../../redux/selectors/topScorersSelector";
import useDispatchTopScorers from "../../hooks/useDispatchTopScorers";
import styles from "./TopScorers.module.css";

const TopScorers: React.FC = () => {
    const params = useParams()

    const {topScorers, loading, error} = useSelector(getTopScorersSelector)

    const {fetchTopScorers} = useDispatchTopScorers()

    useEffect(() => {
        if (params.season_id) {
            fetchTopScorers(+params.season_id)
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
            {topScorers.length > 0
                ? <div className={styles.playerWrapper}>
                    {topScorers.map(topScorer =>
                        <div className={styles.playerBox}>
                            <div className={styles.playerData}>
                                <p><span>Position:</span> {topScorer.pos}</p>
                            </div>
                            <div className={styles.playerData}>
                                <Link to={`/player/${topScorer.player.player_id}`} target='_blank'>
                                    <p><span>Name:</span> {topScorer.player.player_name}</p>
                                </Link>
                            </div>
                            <div className={styles.playerData}>
                                <p><span>Team:</span> {topScorer.team.team_name}</p>
                            </div>
                            <div className={styles.playerData}>
                                <p><span>Matches played:</span> {topScorer.matches_played ? topScorer.matches_played : 0}</p>
                            </div>
                            <div className={styles.playerData}>
                                <p><span>Minutes played:</span> {topScorer.minutes_played ? topScorer.minutes_played : 0}</p>
                            </div>
                            <div className={styles.playerData}>
                                <p><span>Substituted in:</span> {topScorer.substituted_in ? topScorer.substituted_in : 0}</p>
                            </div>
                            <div className={styles.playerData}>
                                <p><span>Goals:</span>{topScorer.goals.overall ? topScorer.goals.overall : 0}</p>
                                <p><span>Home goals:</span>{topScorer.goals.home ? topScorer.goals.home : 0}</p>
                                <p><span>Away goals:</span>{topScorer.goals.away ? topScorer.goals.away : 0}</p>
                            </div>
                            <div className={styles.playerDataRight}>
                                <p><span>Penalties:</span>{topScorer.penalties ? topScorer.penalties : 0}</p>
                            </div>
                        </div>
                    )}
                </div>
                : <div>No results</div>}
        </div>
    )
}

export default TopScorers