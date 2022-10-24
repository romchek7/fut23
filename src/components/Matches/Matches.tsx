import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getMatchesSelector} from "../../redux/selectors/matchesSelector";
import useDispatchMatches from "../../hooks/useDispatchMatches";
import styles from "./Matches.module.css";

interface MatchesProps {
    season_id: number
    live: boolean
    date_from: string
    date_to: string
}

const Matches: React.FC<MatchesProps> = ({season_id, live, date_from, date_to}) => {
    const {matches, loadingMatches, errorMatches} = useSelector(getMatchesSelector)

    const {fetchMatches} = useDispatchMatches()

    const [liveIsChecked, setLiveIsChecked] = useState(false)
    const [dateFrom, setDate_from] = useState(date_from)
    const [dateTo, setDate_to] = useState(date_to)

    useEffect(() => {
        fetchMatches(season_id, false, 0, date_from, date_to)
    }, [])

    useEffect(() => {
        fetchMatches(season_id, liveIsChecked, 0, '', '')
    }, [liveIsChecked])

    useEffect(() => {
        fetchMatches(season_id, false, 0, dateFrom, dateTo)
    }, [dateTo, dateFrom])

    const handleChangeLive = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setLiveIsChecked(true)
        } else {
            setLiveIsChecked(false)
        }
    }

    const handleChangeDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate_from(e.currentTarget.value)
    }

    const handleChangeDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate_to(e.currentTarget.value)
    }

    const onReset = () => {
        setDate_from(date_from)
        setDate_to(date_to)
        setLiveIsChecked(false)
    }

    if (loadingMatches) {
        return <div>Loading...</div>
    }

    if (errorMatches) {
        return <div>{errorMatches}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.filters}>
                <div className={styles.filterBox}>
                    <div className={styles.filterBox1}>
                        <span>
                            <input type='checkbox' id='liveMatch' name='liveMatch' disabled={!live}
                                   checked={liveIsChecked} onChange={handleChangeLive}/> Live
                        </span>
                    </div>
                    <div className={styles.filterBox2}>
                        <div>
                            <p>
                                Date from:
                            </p>
                            <input type="date" name="date_from"
                                   value={dateFrom}
                                   onChange={handleChangeDateFrom}
                                   required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                        </div>
                        <div>
                            <p>
                                Date to:
                            </p>
                            <input type="date" name="date_to"
                                   value={dateTo}
                                   onChange={handleChangeDateTo}
                                   required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                        </div>
                    </div>
                    <div className={styles.filterBox3}>
                        <button className='SearchBtn' onClick={() => onReset()}>Reset</button>
                    </div>
                </div>
            </div>
            <div className={styles.matchesBox}>
                {matches.length > 0
                    ? <table>
                        <tbody>
                        <tr>
                            <th>Status</th>
                            <th>Match start</th>
                            <th>Home team</th>
                            <th>Full time</th>
                            <th>Away team</th>
                            <th>Venue</th>
                        </tr>
                        {matches.map(match =>
                            <tr key={match.match_id}>
                                <td>{match.status ? match.status : '-----'}</td>
                                <td>{match.match_start}</td>
                                <td className={styles.teamTd}>
                                    <img src={match.home_team.logo}/>
                                    {match.home_team.name}
                                </td>
                                <td className={styles.fullTime}>{match.stats.ft_score ? match.stats.ft_score : '-----'}</td>
                                <td className={styles.teamTd}>
                                    <img src={match.away_team.logo}/>
                                    {match.away_team.name}
                                </td>
                                <td>
                                    {match.venue ? match.venue.name : '-----'}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    : <div className={styles.NoResults}>No results</div>
                }
            </div>
        </div>
    )
}

export default Matches