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

const Matches: React.FC <MatchesProps> = ({season_id, live, date_from, date_to}) => {
    const {matches, loadingMatches, errorMatches} = useSelector(getMatchesSelector)

    const {fetchMatches} = useDispatchMatches()

    const [liveIsChecked, setLiveIsChecked] = useState(false)
    const [dateFrom, setDate_from] = useState(date_from)
    const [dateTo, setDate_to] = useState(date_to)

    useEffect(() => {
        fetchMatches(season_id, false, 0, '', '')
    }, [season_id])

    useEffect(() => {
        fetchMatches(season_id, liveIsChecked, 0, '', '')
    }, [liveIsChecked])

    useEffect(() => {
        fetchMatches(season_id, false, 0, dateFrom, dateTo)
    }, [dateTo, dateFrom])

    const handleChangeLive = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setLiveIsChecked(true)
        }
        else {
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
        setDate_from('')
        setDate_to('')
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
                    <span>
                        <input type='checkbox' id='liveMatch' name='liveMatch' disabled={!live}
                               checked={liveIsChecked} onChange={handleChangeLive}/> Live
                    </span>
                </div>
                <div className={styles.filterBox}>
                    <span>
                        <p>
                            Date from:
                        </p>
                        <input type="date" name="date_from"
                               value={dateFrom}
                               onChange={handleChangeDateFrom}
                               required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    </span>
                    <span>
                        <p>
                            Date to:
                        </p>
                        <input type="date" name="date_to"
                               value={dateTo}
                               onChange={handleChangeDateTo}
                               required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    </span>
                    <button className='SearchBtn' onClick={() => onReset}>Reset</button>
                </div>
            </div>
            <div className={styles.matchesBox}>
                {matches.length > 0
                    ? matches.map(match =>
                        <div key={match.match_id} className={styles.matchInfo}>
                            <div className={styles.status}>
                                <p>Status:</p>
                                <span>{match.status ? match.status : '?'}</span>
                            </div>
                            <div className={styles.matchDate}>
                                <p>Match start:</p>
                                <span>{match.match_start}</span>
                            </div>
                            <div className={styles.matchTeams}>
                                <span>{match.home_team.name}</span>
                                <p>{match.stats.ft_score ? match.stats.ft_score : '?-?'}</p>
                                <span>{match.away_team.name}</span>
                            </div>
                        </div>
                    )
                    : <div className={styles.NoResults}>No results</div>
                }
            </div>
        </div>
    )
}

export default Matches