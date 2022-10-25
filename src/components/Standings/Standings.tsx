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
            {standingInfo.standings.length > 0
                ? <table>
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Team</th>
                        <th scope="col">Points</th>
                        <th scope="col">Status</th>
                        <th scope="col">Result</th>
                        <th scope="col">Games played</th>
                        <th scope="col">Won</th>
                        <th scope="col">Draw</th>
                        <th scope="col">Lost</th>
                        <th scope="col">Goals diff</th>
                        <th scope="col">Goals scored</th>
                        <th scope="col">Goals against</th>
                    </tr>
                    </thead>
                    <tbody>
                    {standingInfo.standings.map((standing, idx) =>
                        <tr key={idx}>
                            <td data-label='№'>{idx + 1}</td>
                            <td data-label='Team'>{
                                teams.map(team => team.team_id === standing.team_id
                                    ? <div key={team.team_id} className={styles.teamNameLogo}>
                                        <img src={team.logo}/>
                                        <p>{team.name}</p>
                                    </div>
                                    : <span key={team.team_id}></span>)
                            }</td>
                            <td data-label='Points'>{standing.points}</td>
                            <td data-label='Status'>{standing.status}</td>
                            <td data-label='Result'>{standing.result}</td>
                            <td data-label='Games played'>{standing.overall.games_played}</td>
                            <td data-label='Won'>{standing.overall.won}</td>
                            <td data-label='Draw'>{standing.overall.draw}</td>
                            <td data-label='Lost'>{standing.overall.lost}</td>
                            <td data-label='Goals diff'>{standing.overall.goals_diff}</td>
                            <td data-label='Goals scored'>{standing.overall.goals_scored}</td>
                            <td data-label='Goals against'>{standing.overall.goals_against}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <div>No results</div>}
        </div>
    )
}

export default Standings