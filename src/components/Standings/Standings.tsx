import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getStandingsSelector} from "../../redux/selectors/standingsSelector";
import useDispatchStandings from "../../hooks/useDispatchStandings";
import useDispatchTeams from "../../hooks/useDispatchTeams";
import {getTeamsSelector} from "../../redux/selectors/teamsSelector";
import styles from "./Standings.module.css";
import {Trans, useTranslation} from "react-i18next";

interface StandingsProps {
    season_id: number
    country_id: number
}

const Standings: React.FC<StandingsProps> = ({season_id, country_id}) => {
    const {t} = useTranslation()

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
                        <th scope="col"><Trans t={t}>Team</Trans></th>
                        <th scope="col"><Trans t={t}>Points</Trans></th>
                        <th scope="col"><Trans t={t}>Status</Trans></th>
                        <th scope="col"><Trans t={t}>Result</Trans></th>
                        <th scope="col"><Trans t={t}>Games played</Trans></th>
                        <th scope="col"><Trans t={t}>Won</Trans></th>
                        <th scope="col"><Trans t={t}>Draw</Trans></th>
                        <th scope="col"><Trans t={t}>Lost</Trans></th>
                        <th scope="col"><Trans t={t}>Goals diff</Trans></th>
                        <th scope="col"><Trans t={t}>Goals scored</Trans></th>
                        <th scope="col"><Trans t={t}>Goals against</Trans></th>
                    </tr>
                    </thead>
                    <tbody>
                    {standingInfo.standings.map((standing, idx) =>
                        <tr key={idx}>
                            <td data-label='№'>{idx + 1}</td>
                            <td data-label={`${t('Team')}`}>{
                                teams.map(team => team.team_id === standing.team_id
                                    ? <div key={team.team_id} className={styles.teamNameLogo}>
                                        <img src={team.logo}/>
                                        <p>{team.name}</p>
                                    </div>
                                    : <span key={team.team_id}></span>)
                            }</td>
                            <td data-label={`${t('Points')}`}>{standing.points}</td>
                            <td data-label={`${t('Status')}`}><Trans t={t}>{standing.status}</Trans></td>
                            <td data-label={`${t('Result')}`}><Trans t={t}>{standing.result}</Trans></td>
                            <td data-label={`${t('Games played')}`}>{standing.overall.games_played}</td>
                            <td data-label={`${t('Won')}`}>{standing.overall.won}</td>
                            <td data-label={`${t('Draw')}`}>{standing.overall.draw}</td>
                            <td data-label={`${t('Lost')}`}>{standing.overall.lost}</td>
                            <td data-label={`${t('Goals diff')}`}>{standing.overall.goals_diff}</td>
                            <td data-label={`${t('Goals scored')}`}>{standing.overall.goals_scored}</td>
                            <td data-label={`${t('Goals against')}`}>{standing.overall.goals_against}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <div>No results</div>}
        </div>
    )
}

export default Standings