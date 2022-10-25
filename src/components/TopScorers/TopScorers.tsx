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
        window.scrollTo({behavior: 'smooth', top: 0})
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
                ? <table>
                    <thead>
                    <tr>
                        <th scope="col">Position</th>
                        <th scope="col">Name</th>
                        <th scope="col">Team</th>
                        <th scope="col">Matches played</th>
                        <th scope="col">Minutes played</th>
                        <th scope="col">Substituted in</th>
                        <th scope="col">Goals</th>
                        <th scope="col">Home goals</th>
                        <th scope="col">Away goals</th>
                        <th scope="col">Penalties</th>
                    </tr>
                    </thead>
                    <tbody>
                    {topScorers.map((topScorer, idx) =>
                        <tr key={idx}>
                            <td data-label='Position'>{topScorer.pos}</td>
                            <td data-label='Name'>
                                <Link to={`/player/${topScorer.player.player_id}`} target='_blank'>
                                    <p>{topScorer.player.player_name}</p>
                                </Link>
                            </td>
                            <td data-label='Team'>{topScorer.team.team_name}</td>
                            <td data-label='Matches played'>{topScorer.matches_played}</td>
                            <td data-label='Minutes played'>{topScorer.minutes_played}</td>
                            <td data-label='Substituted in'>{topScorer.substituted_in ? topScorer.substituted_in : 0}</td>
                            <td data-label='Goals'>{topScorer.goals.overall}</td>
                            <td data-label='Home goals'>{topScorer.goals.home ? topScorer.goals.home : 0}</td>
                            <td data-label='Away goals'>{topScorer.goals.away ? topScorer.goals.away : 0}</td>
                            <td data-label='Penalties'>{topScorer.penalties ? topScorer.penalties : 0}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <div>No results</div>}
        </div>
    )
}

export default TopScorers