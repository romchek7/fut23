import React, {useEffect, useState} from "react";
import styles from "./Leagues.module.css";
import useDispatchLeagues from "../../hooks/useDispatchLeagues";
import {useSelector} from "react-redux";
import {getLeagues} from "../../redux/selectors/leaguesSelector";
import Countries from "../Countries/Countries";
import {ILeague} from "../../redux/types/leaguesType";
import {NavLink} from "react-router-dom";

interface LeagueProps {
    leagues: ILeague[]
}

const League: React.FC <LeagueProps> = ({leagues}) => {
    return (
        <div className={styles.leaguesWrapper}>
            {leagues.map(league =>
                <div className={styles.leagueBox}>
                    {league.name}
                    <NavLink className={styles.ShowSeasonsNavlink} to={`/seasons/${league.league_id}`}>
                        <button className='SearchBtn'>Show seasons</button>
                    </NavLink>
                </div>
            )}
        </div>
    )
}

const Leagues: React.FC = () => {
    const {fetchLeagues} = useDispatchLeagues()

    const {leagues, loadingLeagues, errorLeagues} = useSelector(getLeagues)

    const [county_id, setCountryID] = useState(0)
    const [continentIsReadyToFetch, setContinent] = useState('')

    useEffect(() => {
        fetchLeagues()
        window.scrollTo({behavior: 'smooth', top: 0})
    }, [])

    useEffect(() => {
        if (county_id) {
            fetchLeagues(county_id)
        }
        if (!county_id) {
            fetchLeagues()
        }
    }, [county_id])

    if (loadingLeagues) {
        return <div>Loading...</div>
    }

    if (errorLeagues) {
        return <div>{errorLeagues}</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.filtersMain}>
                <Countries county_id={county_id} setCountryID={setCountryID}
                           continentIsReadyToFetch={continentIsReadyToFetch} setContinent={setContinent}/>
            </div>
            <div className={styles.content}>
                <h1>Subscribed:</h1>
                <League leagues={leagues}/>
            </div>
        </div>
    )
}

export default Leagues