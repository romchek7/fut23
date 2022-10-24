import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getTeamsSelector} from "../../redux/selectors/teamsSelector";
import useDispatchTeams from "../../hooks/useDispatchTeams";
import Countries from "../Countries/Countries";
import styles from "./Teams.module.css";
import PaginationFC from "../assets/Pagination/Pagination";
import icon from "../../assets/img/account.png";

const Teams: React.FC = () => {
    const {teams, loadingTeams, errorTeams} = useSelector(getTeamsSelector)

    const {fetchTeams} = useDispatchTeams()

    const [country_id, setCountryID] = useState(0)
    const [continentIsReadyToFetch, setContinent] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(12)
    const [pageSize, setPageSize] = useState(12)

    useEffect(() => {
        setCurrentPage(1)
        setMinIndex(0)
        setMaxIndex(12)
    }, [teams])

    useEffect(() => {
        if (country_id != 0) {
            fetchTeams(country_id)
        }

    }, [country_id])

    useEffect(() => {
        if (teams.length > 0) {
            setMaxIndex(pageSize)
        }
    }, [teams, pageSize])

    if (loadingTeams) {
        return <div>Loading...</div>
    }

    if (errorTeams) {
        return <div>Some error: {errorTeams}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.countiesBlock}>
                <Countries setCountryID={setCountryID} county_id={country_id}
                           continentIsReadyToFetch={continentIsReadyToFetch}
                           setContinent={setContinent}/>
            </div>
            <div className={styles.teamsBlock}>
                {country_id != 0
                    ? <div className={styles.teamsListMain}>
                        <div className={styles.teamsWrapper}>
                            {teams.map((team, idx) => idx >= minIndex
                                && idx < maxIndex
                                && <div key={team.team_id} className={styles.teamBox}>
                                    <img src={team.logo ? team.logo : icon}/>
                                    <p>{team.name}</p>
                                    <p>{team.short_code}</p>
                                    <p>
                                        <span className={`fi fi-${team.country.country_code}`}></span>
                                        {team.country.name}
                                    </p>
                                </div>
                            )}
                        </div>
                        <PaginationFC setPageSize={setPageSize} pageSize={pageSize} currentPage={currentPage}
                                      totalCount={teams.length} setCurrentPage={setCurrentPage}
                                      setMinIndex={setMinIndex} setMaxIndex={setMaxIndex}/>
                    </div>
                    : <div className={styles.SelectCountry}>
                        <p>
                            Select country
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Teams