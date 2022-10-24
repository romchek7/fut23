import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getStandingsSelector} from "../../redux/selectors/standingsSelector";
import useDispatchStandings from "../../hooks/useDispatchStandings";
import useDispatchTeams from "../../hooks/useDispatchTeams";
import {getTeamsSelector} from "../../redux/selectors/teamsSelector";
import styles from "./Standings.module.css";

interface StandingsProps {
    season_id: number
    country_id: number
}

const Standings: React.FC<StandingsProps> = ({season_id, country_id}) => {
    const {standingInfo, loading, error} = useSelector(getStandingsSelector)
    const {teams, loadingTeams, errorTeams} = useSelector(getTeamsSelector)

    const {fetchStandings} = useDispatchStandings()
    const {fetchTeams} = useDispatchTeams()

    useEffect(() => {
        fetchStandings(season_id)
        fetchTeams(country_id)
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={styles.main}>
            {standingInfo.standings.length > 0
                ? <table>
                    <tbody>
                    <tr>
                        <th>№</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Status</th>
                        <th>Result</th>
                        <th>Games played</th>
                        <th>Won</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        <th>Goals diff</th>
                        <th>Goals scored</th>
                        <th>Goals against</th>
                    </tr>
                    {standingInfo.standings.map((standing, idx) =>
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{
                                teams.map(team => team.team_id === standing.team_id ? <img key={team.team_id} src={team.logo}/> : <span key={team.team_id}></span>)
                            }</td>
                            <td>{standing.points}</td>
                            <td>{standing.status}</td>
                            <td>{standing.result}</td>
                            <td>{standing.overall.games_played}</td>
                            <td>{standing.overall.won}</td>
                            <td>{standing.overall.draw}</td>
                            <td>{standing.overall.lost}</td>
                            <td>{standing.overall.goals_diff}</td>
                            <td>{standing.overall.goals_scored}</td>
                            <td>{standing.overall.goals_against}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <div>No results</div>}
        </div>
    )
}

export default Standings